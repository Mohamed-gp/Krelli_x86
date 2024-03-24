import 'package:flutter/material.dart';

class success extends StatelessWidget {
  const success({super.key});

  @override
  Widget build(BuildContext context) {
    return 
       Scaffold(
        body: Column(children: [
          const SizedBox(
            height: 40,
          ),
          const Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Icon(
                  Icons.keyboard_arrow_left_rounded,
                  size: 50,
                ),
                Text(
                  "Payment",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600),
                ),
                Icon(Icons.menu)
              ]),
          const SizedBox(
            height: 230,
          ),
          const SizedBox(
              height: 100,
              width: 100,
              child: Image(image: AssetImage("assets/images/checked.png"))),
          const SizedBox(
            height: 20,
          ),
          const Text(
            "Success",
            style: TextStyle(
                fontWeight: FontWeight.w700,
                fontSize: 30,
                color: Color.fromARGB(255, 104, 104, 104)),
          ),
          const SizedBox(
            height: 30,
          ),
          const Text(
            "you have completed your payment",
            style: TextStyle(
                color: Color.fromARGB(255, 192, 192, 192),
                fontSize: 16,
                fontWeight: FontWeight.w600),
          ),
          const SizedBox(
            height: 20,
          ),
          ElevatedButton(
              style: ElevatedButton.styleFrom(
                  shape: const RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(10))),
                  backgroundColor: const Color(0xFF13C39C),
                  minimumSize: const Size(350, 50)),
              onPressed: () {
                print("sd");
              },
              child: const Text(
                "Dashboard",
                style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w900,
                    fontSize: 17),
              ))
        ]),
      );
    
  }
}
