import 'package:flutter/material.dart';

class Lost extends StatefulWidget {
  static const String id = 'Lost';
  const Lost({Key? key}) : super(key: key);

  @override
  State<Lost> createState() => _LostState();
}

class _LostState extends State<Lost> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Lost&Found Section",
          style: TextStyle(color: Colors.blue.shade200),
        ),
        actions: [
          TextButton.icon(
            onPressed: () {
              Navigator.pushNamed(context, 'HomePage');
            },
            icon: Icon(Icons.person),
            label: Text(
              'Home',
              style: TextStyle(
                fontSize: 20,
              ),
            ),
          ),
        ],
        backgroundColor: Colors.blueGrey,
      ),
      body: Container(
        decoration: BoxDecoration(color: Colors.blue.shade600),
        child: Column(
          children: [
            Row(
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 50.0, top: 30),
                  child: Text(
                    'Lost/Found Section',
                    style: TextStyle(
                      fontSize: 30,
                      fontFamily: 'Font1',
                    ),
                  ),
                )
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
                    'images/key.jpg',
                    height: 120,
                    width: 90,
                  ),
                ),
                Text(
                  'Found a Bikes Key\nNear Workshop! Contact.',
                  style: TextStyle(
                    fontSize: 17,
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
