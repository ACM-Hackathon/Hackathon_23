# from django.shortcuts import render, HttpResponse
from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages, auth
from django.contrib.auth.models import User
from .forms import ImageForm
from .models import Image
from django.core.files.storage import FileSystemStorage
# import tensorflow.keras as keras
# from tensorflow.keras.models import model_from_json
# from tensorflow.keras.preprocessing import image
# import tensorflow as tf
from django.http import HttpResponse
import cv2
from keras.models import model_from_json
from django.http import JsonResponse
import numpy as np
import tensorflow as tf
import logging
from keras.models import load_model
from keras.preprocessing import image
import json
from tensorflow import Graph
# import tensorflow.compat.v1 as tf


img_height, img_width = 224, 224
with open('./models/imagenet_classes.json') as f:
    labelInfo = f.read()
    lablInfo = json.loads(labelInfo)

# model_graph = Graph()
# with model_graph.as_default():
#     tf_session = tf.Session()
#     with tf_session.as_default():
    model = load_model('./models/xraymodel.h5')

# Create your views here.


def index(request):
    return render(request, 'index.html')

# def xray(request):
#     return render(request, 'xray.html')


def image_upload_view(request):
    """Process images uploaded by users"""
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            # Get the current instance object to display in the template
            img_obj = form.instance
            return render(request, 'xray.html', {'form': form, 'img_obj': img_obj})
    else:
        form = ImageForm()
        img = Image.objects.all()
    return render(request, "xray.html", {"img": img, "form": form})


def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        if password == confirm_password:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Username Taken')
                return redirect('register/p')
            else:
                user = User.objects.create_user(
                    username=username, email=email, password=password)
                user.save()
                messages.info(request, 'User created')
                return redirect('login')
        else:
            messages.info(request, 'Password incorrect')
    else:
        return render(request, 'register.html')


def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = auth.authenticate(username=username, password=password)
        if user is not None:
            In = True
            auth.login(request, user)
            return redirect('/xray', {'user': user})
        else:
            logging.basicConfig(level=logging.INFO)
            logging.info("Invalid Credentials")
            return redirect('/xray')
    else:
        return render(request, 'login.html')


def logout(request):
    In = False
    auth.logout(request)
    return redirect('/')


def xray(request):
    return render(request, 'xray.html')

# Load the trained model
# with open('../mediminds/healthcare/j1.json', 'r') as json_file:
#     loaded_model_json = json_file.read()
    # model = model_from_json(loaded_model_json)

# model.load_weights('../mediminds/healthcare/xraymodel.h5')


# Define a view to handle image uploads and predictions
# def predict_disease(request):
#      if request.method == 'POST
#
#
# ':
#         # Get the uploaded X-ray image file
    #     xray_file = request.FILES['xray']

    #     # Save the X-ray image file to a temporary location
    #     fs = FileSystemStorage()
    #     filename = fs.save(xray_file.name, xray_file)
    #     file_url = fs.url(filename)

    #     # Load the X-ray image file using Pillow
    #     img = image.load_img('media/' + filename, target_size=(224, 224), color_mode='grayscale')

    #     # Preprocess the X-ray image
    #     x = image.img_to_array(img)
    #     x = np.expand_dims(x, axis=0)
    #     x = x/255.0

    #     # Use the pre-trained model to predict the diagnosis of the X-ray image
    #     classes = model.predict(x)
    #     predicted_class = np.argmax(classes)

    #     # Display the predicted diagnosis on the webpage
    #     # if predicted_class == 0:
    #     #     diagnosis = 'Anthretis'
    #     # elif predicted_class == 1:
    #     #     diagnosis = 'Fracture'
    #     # elif predicted_class == 2:
    #     #     diagnosis = 'Dislocation'
    #     # elif predicted_class == 3:
    #     #     diagnosis = 'Kidney Stone'
    #     # elif predicted_class == 4:
    #     #     diagnosis = 'Lung Cancer'
    #     # elif predicted_class == 5:
    #     #     diagnosis = 'Normal'
    #     # elif predicted_class == 6:
    #     #     diagnosis = 'TB'

    #     return render(request, 'predicted_diagnosis.html', {'diagnosis': diagnosis})
    #  else:
    #     return render(request, 'predict_disease.html')


def predict_image(request):
     if request.method == 'POST':
        # Load the saved model
        model = tf.keras.models.load_model('../mediminds/healthcare/xraymodel.h5')

        # Save the uploaded image to a directory on the server
        image_file = request.FILES['image']
        image_path = '../mediminds/healthcare/static/images' + image_file.name
        with open(image_path, 'wb') as f:
            f.write(image_file.read())

        # Preprocess the image
        image = cv2.imread(image_path)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        image = cv2.resize(image, (224, 224))
        # x= image.image_to_array(image)
        # x = x/255
        # x = x.reshape(1,image_height, image_width,3)
        # image = image.astype('float32') / 255.0
        image = np.expand_dims(image, axis=0)

        # Make a prediction using the model
        prediction = model.predict(image)[1]

        # Return the prediction as a JSON response
        return JsonResponse({'prediction': str(np.argmax(prediction))})
     else:
        # Render the form template
        return render(request, 'upload_image.html')

#     print(request)
#     print(request.POST.dict())
#     fileObj = request.FILES['filePath']
#     fs = FileSystemStorage()
#     filePathName = fs.save(fileObj.name, fileObj)
#     filePathName = fs.url(filePathName)
#     context = {'filePathName': filePathName}
#     return render(request, 'upload_image.html', context)
# testimage = '.' + filePathName
# img = image.load_img(testimage, target_size=(img_height, img_width))
# x = image.img_to_array(img)
# x = x/255
# x = x.reshape(1, img_height, img_width, 3)
# with model_graph.as_default():
#             with tf_session.as_default():
#                 predi = model.predict(x)

# import numpy as np
# predictedLabel = labelInfo[str(np.argmax(predi[0]))]


