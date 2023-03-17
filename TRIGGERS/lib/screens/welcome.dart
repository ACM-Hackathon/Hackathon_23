import 'package:flutter/material.dart';
import 'package:student_facilitation/screens/login.dart';
import 'package:student_facilitation/screens/register.dart';

class WelcomePage extends StatefulWidget {
  static const String id = 'WelcomePage';

  const WelcomePage({super.key});

  @override
  State<WelcomePage> createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage(
              'images/—Pngtree—hand drawn flat cartoon background_1068944.jpg'),
          fit: BoxFit.cover,
        ),
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: Stack(
          children: [
            Padding(
              padding: const EdgeInsets.only(left: 70, top: 220),
              child: Icon(
                Icons.person,
                size: 200,
                color: Colors.lightBlueAccent,
              ),
            ),
            SingleChildScrollView(
              child: Container(
                width: 700,
                child: Padding(
                  padding:
                      const EdgeInsets.only(left: 30.0, top: 180, right: 12.0),
                  child: Text(
                    'Welcome Student!',
                    style: TextStyle(
                      fontSize: 38,
                      color: Colors.blue.shade900,
                      fontFamily: 'Pacifico',
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 90.0, top: 400, right: 20),
              child: Padding(
                padding: const EdgeInsets.only(left: 8.0, right: 8, top: 50),
                child: Column(
                  children: [
                    SizedBox(
                      width: 150,
                      height: 55,
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.pushNamed(context, MyLogin.id);
                        },
                        child: Text(
                          'Log in',
                          style: TextStyle(
                            fontSize: 25,
                          ),
                        ),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue.shade300,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    SizedBox(
                      width: 150,
                      height: 55,
                      child: Padding(
                        padding: const EdgeInsets.only(left: 8.0, right: 10),
                        child: ElevatedButton(
                          onPressed: () {
                            Navigator.pushNamed(context, MyRegister.id);
                          },
                          child: Text(
                            'Sign Up',
                            style: TextStyle(
                              fontSize: 25,
                            ),
                          ),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.blue.shade300,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
