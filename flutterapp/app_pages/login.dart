import 'dart:ffi';
import 'package:dodo/Home_Page.dart';
import 'package:dodo/sign_up.dart';
import 'package:flutter/material.dart';

class login extends StatelessWidget {
  const login({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final TextEditingController emailController = TextEditingController();
    final TextEditingController passwordController = TextEditingController();

    // Regular expression to match email format
    final emailRegex = RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');

    return Scaffold(
      resizeToAvoidBottomInset: true,
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(
                height: 200,
              ),
              const Text(
                "Krelli",
                style: TextStyle(
                    fontWeight: FontWeight.w400,
                    fontSize: 48,
                    color: Color.fromARGB(255, 32, 0, 102)),
              ),
              const Text(
                "Sign in",
                style: TextStyle(
                    fontWeight: FontWeight.w900,
                    fontSize: 70,
                    color: Color.fromARGB(255, 32, 0, 102)),
              ),
              const SizedBox(
                height: 3,
              ),
              const Text("YOUR EMAIL"),
              const SizedBox(
                height: 6,
              ),
              TextField(
                controller: emailController,
                decoration: const InputDecoration(
                    enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.white10),
                        borderRadius: BorderRadius.all(Radius.circular(10))),
                    focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                            color: Color.fromARGB(255, 255, 255, 255)),
                        borderRadius: BorderRadius.all(Radius.circular(10))),
                    hintText: "enter ur email ",
                    fillColor: Color.fromARGB(255, 240, 240, 240),
                    filled: true),
              ),
              const SizedBox(
                height: 30,
              ),
              const Text("YOUR PASSWORD"),
              const SizedBox(
                height: 5,
              ),
              TextField(
                controller: passwordController,
                obscureText: true,
                decoration: const InputDecoration(
                    enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.white10),
                        borderRadius: BorderRadius.all(Radius.circular(10))),
                    focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                            color: Color.fromARGB(255, 255, 255, 255)),
                        borderRadius: BorderRadius.all(Radius.circular(10))),
                    hintText: "enter ur password  ",
                    fillColor: Color.fromARGB(255, 240, 240, 240),
                    filled: true),
              ),
              const SizedBox(
                height: 40,
              ),
              Center(
                child: SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {
                      // Validate email format
                      if (!emailRegex.hasMatch(emailController.text)) {
                        showDialog(
                          context: context,
                          builder: (BuildContext context) {
                            return AlertDialog(
                              title: const Text("Invalid Email"),
                              content: const Text(
                                  "Please enter a valid email address."),
                              actions: [
                                TextButton(
                                  onPressed: () {
                                    Navigator.of(context).pop();
                                  },
                                  child: const Text("OK"),
                                ),
                              ],
                            );
                          },
                        );
                        return;
                      }

                      // Validate password length and presence of a number
                      if (passwordController.text.length < 8 ||
                          !passwordController.text.contains(RegExp(r'\d'))) {
                        showDialog(
                          context: context,
                          builder: (BuildContext context) {
                            return AlertDialog(
                              title: const Text("Invalid Password"),
                              content: const Text(
                                  "Password must be at least 8 characters long and contain a number."),
                              actions: [
                                TextButton(
                                  onPressed: () {
                                    Navigator.of(context).pop();
                                  },
                                  child: const Text("OK"),
                                ),
                              ],
                            );
                          },
                        );
                        return;
                      }

                      // Navigate to home page if validation passes
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const home_page(),
                          ));
                    },
                    style: ElevatedButton.styleFrom(
                        shadowColor: Colors.amber,
                        shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10)),
                        backgroundColor: const Color.fromARGB(255, 20, 36, 176),
                        padding: const EdgeInsets.symmetric(
                            horizontal: 10, vertical: 10),
                        textStyle: const TextStyle(
                            fontSize: 20, fontWeight: FontWeight.bold)),
                    child: const Text(
                      'Login',
                      style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w900,
                          fontSize: 25),
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 50,
              ),
              const Center(
                child: Text(
                  "Dont have an Account?",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                ),
              ),
              Center(
                child: SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const sign_up(),
                          ));
                    },
                    style: ElevatedButton.styleFrom(
                        shadowColor: Colors.amber,
                        shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10)),
                        backgroundColor: Colors.black,
                        padding: const EdgeInsets.symmetric(
                            horizontal: 10, vertical: 15),
                        textStyle: const TextStyle(
                            fontSize: 20, fontWeight: FontWeight.bold)),
                    child: const Text(
                      'Create an Account ',
                      style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w400,
                          fontSize: 25),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

