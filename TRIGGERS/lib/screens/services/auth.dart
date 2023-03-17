import 'package:firebase_auth/firebase_auth.dart';

class AuthService {
  static final _auth = FirebaseAuth.instance;
  static final _firestore = FirebaseAuth.instance;

  static Future<bool>(String name, String email, String password) {}
}
