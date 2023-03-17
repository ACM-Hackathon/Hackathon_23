import 'package:flutter/material.dart';

class Message extends StatefulWidget {
  static const String id = 'Message';
  const Message({Key? key}) : super(key: key);

  @override
  State<Message> createState() => _MessageState();
}

class _MessageState extends State<Message> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
