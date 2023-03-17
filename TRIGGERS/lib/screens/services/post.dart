import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:student_facilitation/screens/home.dart';

class Post extends StatefulWidget {
  const Post({Key? key}) : super(key: key);
  static const String id = 'posts';
  @override
  State<Post> createState() => _PostState();
}

class _PostState extends State<Post> {
  final _firestore = FirebaseFirestore.instance;
  late String problem;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        centerTitle: true,
        title: Text('Add', style: TextStyle(color: Colors.white, fontSize: 20)),
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20.0),
        child: Column(
          children: [
            SizedBox(height: 20),
            TextField(
              maxLength: 280,
              maxLines: 7,
              decoration: InputDecoration(hintText: 'Enter Your Problem'),
              onChanged: (value) {
                problem = value;
              },
            ),
            TextButton(
                onPressed: () {
                  _firestore.collection('problems').add({
                    'text': problem,
                  });
                  Navigator.pushNamed(context, 'HomePage');
                },
                child: Text('Post Problem'))
          ],
        ),
      ),
    );
  }
}
