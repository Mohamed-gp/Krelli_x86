import 'dart:ffi';

import 'package:dodo/login.dart';
import 'package:flutter/material.dart';

class sign_up extends StatelessWidget {
  const sign_up({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(30.0),
        child: Column(
          children: [
            SizedBox(
              height: height * 0.05,
            ),
            const Center(
              child: Text(
                "Congratulations",
                style: TextStyle(
                    fontSize: 35,
                    fontWeight: FontWeight.w600,
                    color: Color.fromARGB(255, 27, 8, 87)),
              ),
            ),
            const Center(
              child: Text(
                "On verifying that the email belongs to you",
                style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w500,
                    color: Color.fromARGB(255, 27, 8, 87)),
              ),
            ),
            SizedBox(
              height: height * 0.07,
            ),
            const Center(
              child: Text(
                "Sign Up",
                style: TextStyle(
                    fontSize: 50,
                    fontWeight: FontWeight.w900,
                    color: Color.fromARGB(255, 27, 8, 87)),
              ),
            ),
            const Center(
              child: Text(
                "Sign we need something more",
                style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w500,
                    color: Color.fromARGB(255, 27, 8, 87)),
              ),
            ),
            SizedBox(height: height * 0.05),
            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: TextField(
                    decoration: InputDecoration(
                        enabledBorder: OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.white10),
                            borderRadius:
                                BorderRadius.all(Radius.circular(10))),
                        focusedBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                                color: Color.fromARGB(255, 255, 255, 255)),
                            borderRadius:
                                BorderRadius.all(Radius.circular(10))),
                        hintText: "first name   ",
                        fillColor: Color.fromARGB(255, 240, 240, 240),
                        filled: true),
                  ),
                ),
                SizedBox(
                  width: 10,
                ),
                Expanded(
                  child: TextField(
                    decoration: InputDecoration(
                        enabledBorder: OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.white10),
                            borderRadius:
                                BorderRadius.all(Radius.circular(10))),
                        focusedBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                                color: Color.fromARGB(255, 255, 255, 255)),
                            borderRadius:
                                BorderRadius.all(Radius.circular(10))),
                        hintText: "last name  ",
                        fillColor: Color.fromARGB(255, 240, 240, 240),
                        filled: true),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: height * 0.01,
            ),
            const TextBox(
              Txt: "yourmail@gmail.com",
            ),
            SizedBox(
              height: height * 0.01,
            ),
            const TextBox(
              Txt: "Password",
            ),
            SizedBox(
              height: height * 0.01,
            ),
            const TextBox(
              Txt: "Confirm Password",
            ),
            SizedBox(
              height: height * 0.05,
            ),
            Center(
              child: SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () {
                    debugPrint("clicked!");
                  },
                  style: ElevatedButton.styleFrom(
                      shadowColor: Colors.amber,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10)),
                      backgroundColor: const Color.fromARGB(255, 20, 63, 255),
                      padding: const EdgeInsets.symmetric(
                          horizontal: 10, vertical: 15),
                      textStyle: const TextStyle(
                          fontSize: 20, fontWeight: FontWeight.bold)),
                  child: const Text(
                    'Submit ',
                    style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                        fontSize: 25),
                  ),
                ),
              ),
            ),
            SizedBox(
              height: height * 0.03,
            ),
            ElevatedButton(
                onPressed: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => const login(),
                      ));
                },
                child: const Text("Back to login"))
          ],
        ),
      ),
    );
  }
}

class TextBox extends StatelessWidget {
  const TextBox({super.key, required this.Txt});
  final String Txt;

  @override
  Widget build(BuildContext context) {
    return TextField(
      decoration: InputDecoration(
          enabledBorder: const OutlineInputBorder(
              borderSide: BorderSide(color: Colors.white10),
              borderRadius: BorderRadius.all(Radius.circular(10))),
          focusedBorder: const OutlineInputBorder(
              borderSide: BorderSide(color: Color.fromARGB(255, 255, 255, 255)),
              borderRadius: BorderRadius.all(Radius.circular(10))),
          hintText: Txt,
          fillColor: const Color.fromARGB(255, 240, 240, 240),
          filled: true),
    );
  }
}
