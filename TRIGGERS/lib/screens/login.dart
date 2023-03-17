import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:student_facilitation/screens/home.dart';
import 'package:flutter_signin_button/flutter_signin_button.dart';

class MyLogin extends StatefulWidget {
  static const String id = 'MyLogin';

  @override
  State<MyLogin> createState() => _MyLoginState();
}

class _MyLoginState extends State<MyLogin> {
  final _auth = FirebaseAuth.instance;
  late String email;
  late String password;
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
              image: AssetImage(
                  'images/—Pngtree—hand drawn flat cartoon background_1068944.jpg'),
              fit: BoxFit.cover),
        ),
        child: Container(
          padding: EdgeInsets.only(left: 20, right: 20, bottom: 50, top: 50),
          //color: Color(0xFF3b5999).withOpacity(.85),

          // color: Colors.transparent,
          child: Scaffold(
            backgroundColor: Colors.transparent,
            body: SafeArea(
              child: SingleChildScrollView(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Login',
                      style: TextStyle(
                        fontFamily: 'Pacifico',
                        fontSize: 50,
                        fontWeight: FontWeight.bold,
                        color: Colors.blue.shade900,
                      ),
                    ),
                    SizedBox(
                      height: 70,
                    ),
                    TextField(
                      style: TextStyle(color: Colors.blue.shade600),
                      onChanged: (value) {
                        email = value;
                      },
                      cursorColor: Colors.blue.shade800,
                      keyboardType: TextInputType.emailAddress,
                      decoration: InputDecoration(
                          icon: Icon(
                            Icons.mail,
                            size: 30,
                          ),
                          fillColor: Colors.transparent,
                          filled: true,
                          hintText: 'Email Address',
                          hintStyle: TextStyle(color: Colors.blue.shade900),
                          labelText: 'Enter your Email',
                          border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(10)),
                          labelStyle: TextStyle(
                            color: Colors.blueAccent,
                          )),
                    ),
                    SizedBox(height: 30),
                    TextField(
                      onChanged: (value) {
                        password = value;
                      },
                      cursorColor: Colors.blue.shade900,
                      obscureText: true,
                      keyboardType: TextInputType.visiblePassword,
                      decoration: InputDecoration(
                          icon: Icon(
                            Icons.lock,
                            size: 30,
                          ),
                          fillColor: Colors.transparent,
                          filled: true,
                          hintText: 'Password',
                          hintStyle: TextStyle(color: Colors.blue.shade900),
                          labelText: 'Enter your password',
                          border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(10)),
                          labelStyle: TextStyle(
                            color: Colors.blueAccent,
                          )),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    IconButton(
                      onPressed: () async {
                        try {
                          final user = await _auth.signInWithEmailAndPassword(
                              email: email, password: password);
                          if (user != null) {
                            Navigator.pushNamed(context, HomePage.id);
                          }
                        } catch (e) {
                          print(e);
                        }
                      },
                      icon: Icon(Icons.arrow_circle_right_rounded),
                      iconSize: 80,
                      color: Colors.blue.shade900,
                    ),
                    Divider(
                      height: 1,
                      color: Colors.black,
                    ),
                    SizedBox(
                      height: 40,
                    ),
                    //
                    SignInButton(
                      Buttons.Google,
                      text: "Sign up with Google",
                      onPressed: () {},
                    ),
                    SignInButton(
                      Buttons.Facebook,
                      text: "Sign up with Facebook",
                      onPressed: () {},
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
