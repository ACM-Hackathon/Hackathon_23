import 'package:flutter/material.dart';

class Trending extends StatefulWidget {
  static const String id = 'Trending';
  const Trending({Key? key}) : super(key: key);

  @override
  State<Trending> createState() => _TrendingState();
}

class _TrendingState extends State<Trending> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Trending Section",
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
                    'Trending Problems',
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
