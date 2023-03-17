import serial
import time
import firebase_admin
from firebase_admin import credentials, db

srl = serial.Serial('COM3', 9600, timeout=1)
time.sleep(2)
srl.reset_input_buffer()

cred = credentials.Certificate("firebase_auth.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://netra-e747d-default-rtdb.firebaseio.com/'
    })
ref = db.reference("/")
print("Connected to Firebase successfully!!")

def main():
    line = srl.readline() 

    if line:
        received_data = line.decode()  
        sid = received_data.upper()

        ref.set({sid: {"count": 1}})
        print(ref.get())

if __name__ == '__main__':
    while (True):
        main()
        time.sleep(1)