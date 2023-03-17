import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:student_facilitation/screens/services/post.dart';

final _firestore = FirebaseFirestore.instance;

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);
  static const String id = 'HomePage';
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final messageTextController = TextEditingController();
  final _auth = FirebaseAuth.instance;
  late Firebase loggedInuser;

  late String messageText;

  @override
  void initState() {
    super.initState();
    getCurrentUser();
  }

  void getCurrentUser() async {
    try {
      final user = await _auth.currentUser!;
      if (user != null) {
        loggedInuser = user as Firebase;
      }
    } catch (e) {
      print(e);
    }
  }

  // void getProblems() async {
  //   final messages = await _firestore.collection('problems').get();
  //   for (var message in messages.docs) {
  //     print(message.data());
  //   }
  // }
  void messageStream() async {
    await for (var snapshot in _firestore.collection('problems').snapshots()) {
      for (var message in snapshot.docs) {
        print(message.data());
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Home",
          style: TextStyle(color: Colors.blue.shade400),
        ),
        actions: [
          TextButton.icon(
            onPressed: () {
              // getProblems();
              // messageStream();
              Navigator.pushNamed(context, 'WelcomePage');
            },
            icon: Icon(Icons.person),
            label: Text('Sign Out'),
          ),
        ],
        backgroundColor: Colors.blue.shade200,
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.white,
        onPressed: () {
          Navigator.pushNamed(context, Post.id);
        },
        child: Icon(
          color: Colors.blue.shade400,
          Icons.add,
        ),
      ),
      drawer: Drawer(
        child: Container(
          color: Colors.blue.shade100,
          child: ListView(
            children: [
              DrawerHeader(
                child: Image.asset('images/dashboard.jpeg'),
                decoration: BoxDecoration(color: Colors.blue.shade200),
              ),
              ListTile(
                title: Text('Profile'),
                onTap: () {
                  Navigator.pushNamed(context, 'Profile');
                },
              ),
              Divider(
                thickness: 2,
                color: Colors.grey,
              ),
              ListTile(
                title: Text('Trending'),
                onTap: () {
                  Navigator.pushNamed(context, 'Trending');
                },
              ),
              Divider(
                thickness: 2,
                color: Colors.grey,
              ),
              ListTile(
                title: Text('Lost&Found'),
                onTap: () {
                  Navigator.pushNamed(context, 'Lost');
                },
              ),
              Divider(
                thickness: 2,
                color: Colors.grey,
              ),
              // ListTile(
              //   title: Text('Message'),
              //   onTap: () {
              //     Navigator.pushNamed(context, 'Message');
              //   },
              // ),
              // Divider(
              //   thickness: 2,
              //   color: Colors.grey,
              // ),
            ],
          ),
        ),
      ),
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("images/homepage.png"),
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            StreamBuilder<QuerySnapshot>(
                stream: FirebaseFirestore.instance
                    .collection('problems')
                    .snapshots(),
                builder: (context, snapshot) {
                  List<Text> messageWidgets = [];
                  if (snapshot.hasData) {
                    final problems = snapshot.data?.docs;
                    List<Text> problemWidgets = [];
                    for (var problem in problems!) {
                      // for (var problem in problems!) {
                      //   final problemWidget = Row(
                      //     mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      //     children: [
                      //       Text(problem['text']),
                      // Text(problem['email']),
                      //   ],
                      // );
                      // problemWidgets.add(problemWidget);

                      final messageText = problem['text'];

                      final messageWidget = Text('$messageText');
                      messageWidgets.add(messageWidget);
                    }
                  }
                  return Expanded(
                    child: Column(
                      children: messageWidgets,
                    ),
                  );
                }
                // return Expanded(
                //   child: ListView(
                //     children: problemWidgets,
                //   ),
                // );

                ),
            Row(
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 58.0),
                  child: Text(
                    'Hello User!',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 50,
                      fontFamily: 'Source Sans Pro',
                      color: Colors.blue.shade200,
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 20,
            ),
            Row(
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 46.0),
                  child: Text(
                    'Recent Problems',
                    style: TextStyle(
                      fontSize: 40,
                      fontFamily: 'Font1',
                      color: Colors.white,
                    ),
                  ),
                ),
                // Row(
                //   mainAxisAlignment: MainAxisAlignment.spaceBetween,
                //   children: [
                //     Container(
                //       child: Image.asset(
                //         'images/key.jpg',
                //         height: 120,
                //         width: 90,
                //       ),
                //     ),
                //     Text(
                //       'Found A Key Near Canteen Katta\nContact Me!',
                //       style: TextStyle(
                //         fontSize: 11,
                //         color: Colors.white,
                //         fontFamily: 'Source Sans Pro',
                //         fontWeight: FontWeight.bold,
                //       ),
                //     ),
                //     Icon(
                //       Icons.upload_outlined,
                //       color: Colors.blue.shade100,
                //       size: 35,
                //     )
                //   ],
                // ),
                // Divider(
                //   color: Colors.blue.shade100,
                // ),
              ],
            ),
            SizedBox(
              height: 60,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  child: Image.asset(
                    'images/libchairs.jpeg',
                    height: 120,
                    width: 90,
                  ),
                ),
                Text(
                  'Noisy Library Chairs\nRubber Bottoms Reccommended!',
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.white,
                    fontFamily: 'Source Sans Pro',
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Icon(
                  Icons.upload_outlined,
                  color: Colors.blue.shade100,
                  size: 35,
                )
              ],
            ),
            Divider(
              color: Colors.blue.shade100,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  child: Image.asset(
                    'images/sewagef.jpeg',
                    height: 120,
                    width: 90,
                  ),
                ),
                Text(
                  'Bad Sewage System Near Mess\nRotning smell!',
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.white,
                    fontFamily: 'Source Sans Pro',
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Icon(
                  Icons.upload_outlined,
                  color: Colors.blue.shade100,
                  size: 35,
                )
              ],
            ),
            Divider(
              color: Colors.blue.shade100,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  child: Image.asset(
                    'images/wires.jpeg',
                    height: 120,
                    width: 90,
                  ),
                ),
                Text(
                  'Dangerous Live Wire Outings\nin Hostel D4',
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.white,
                    fontFamily: 'Source Sans Pro',
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Icon(
                  Icons.upload_outlined,
                  color: Colors.blue.shade100,
                  size: 35,
                )
              ],
            ),
            Divider(
              color: Colors.blue.shade100,
            ),
          ],
        ),
      ),
    );
  }
}
