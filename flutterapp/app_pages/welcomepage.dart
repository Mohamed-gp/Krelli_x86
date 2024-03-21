import 'package:flutter/material.dart';
import 'package:kill/signup.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({Key? key});

  @override
  Widget build(BuildContext context) {
    // Get screen dimensions
    final Size screenSize = MediaQuery.of(context).size;

    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          // Background Image
          Container(
            decoration: BoxDecoration(
              image: DecorationImage(
                image: AssetImage("images/Illustration.png"),
                fit: BoxFit.cover,
              ),
            ),
          ),
          // Another Image
          Positioned(
            top: screenSize.height * 0.2,
            left: screenSize.width * 0.05,
            child: Container(
              width: screenSize.width * 0.9,
              height: screenSize.height * 0.35,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage("images/mouad.png"),
                  fit: BoxFit.contain,
                ),
              ),
            ),
          ),
          // Text
          Positioned(
            top: screenSize.height * 0.55,
            left: screenSize.width * 0.05,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Welcome to",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: screenSize.width * 0.05,
                    fontFamily: 'ABeeZee',
                    fontStyle: FontStyle.italic,
                  ),
                ),
                Text(
                  "Krelli",
                  style: TextStyle(
                    color: Color(0xFF514F59),
                    fontSize: screenSize.width * 0.15,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 10),
                Text(
                  "Find the tenant, list your property in just a simple\nsteps, in your hand.\n\nYou are one step away.",
                  style: TextStyle(
                    color: Color(0xFF7B7F9E),
                    fontSize: screenSize.width * 0.035,
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            top: screenSize.height * 0.85,
            left: screenSize.width * 0.05,
            child: Container(
              width: screenSize.width * 0.9,
              height: screenSize.height * 0.1,
              decoration: BoxDecoration(
                color: Color(0xFF567DF4),
                borderRadius: BorderRadius.circular(10),
              ),
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  onTap: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => SignUpScreen()));
                  },
                  borderRadius: BorderRadius.circular(10),
                  child: Center(
                    child: Text(
                      "Get started",
                      style: TextStyle(
                        fontSize: screenSize.width * 0.05,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
