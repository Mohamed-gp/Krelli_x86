import 'package:flutter/material.dart';
import 'package:dotted_border/dotted_border.dart';



class add_listing extends StatelessWidget {
  const add_listing({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double maxHeight = MediaQuery.of(context).size.height;
    double maxWidth = MediaQuery.of(context).size.width;
    final OutlineInputBorder defaultBorder = OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
        borderSide:
            const BorderSide(color: Color.fromARGB(255, 234, 234, 234)));

    return  Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: maxHeight * 0.05,
              ),
              const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Icon(
                    Icons.arrow_back,
                    size: 30,
                  ),
                  SizedBox(
                    height: 24,
                    width: 24,
                    child: Image(
                      image: AssetImage("assets/images/menu.png"),
                      fit: BoxFit.contain,
                    ),
                  )
                ],
              ),
              SizedBox(
                height: maxHeight * 0.03,
              ),
              const Text(
                "List new property ",
                style: TextStyle(fontSize: 40, fontWeight: FontWeight.w700),
              ),
              const Text(
                "list in the market where  the renters are waiting !",
                style: TextStyle(
                    fontWeight: FontWeight.w400,
                    fontSize: 16,
                    color: Colors.grey),
              ),
              const SizedBox(
                height: 10,
              ),
              input(title: "Property style"),
              SizedBox(
                height: maxHeight * 0.01,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  SizedBox(
                      height: 50,
                      width: maxWidth * 0.44,
                      child: input(title: "type")),
                  SizedBox(
                      height: 50,
                      width: maxWidth * 0.44,
                      child: input(
                        title: "price",
                      )),
                ],
              ),
              SizedBox(
                height: maxHeight * 0.01,
              ),
              input(title: "Address and Location"),
              SizedBox(
                height: maxHeight * 0.01,
              ),
              input(title: "Confirm Passcode"),
              SizedBox(
                height: maxHeight * 0.01,
              ),
              TextField(
                  decoration: InputDecoration(
                      contentPadding: const EdgeInsets.all(35),
                      fillColor: const Color.fromARGB(255, 234, 234, 234),
                      filled: true,
                      hintText: "Description",
                      focusedBorder: const OutlineInputBorder(
                          borderRadius: BorderRadius.all(Radius.circular(10)),
                          borderSide: BorderSide(
                              color: Color.fromARGB(255, 0, 0,
                                  0)) // Change border color when focused
                          ),
                      border: defaultBorder,
                      disabledBorder: defaultBorder,
                      enabledBorder: defaultBorder)),
              const SizedBox(
                height: 10,
              ),
              ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: DottedBorder(
                  strokeWidth: 1,
                  dashPattern: const [6, 6],
                  child: Container(
                    margin: const EdgeInsets.all(20),
                    child: SizedBox(
                      width: maxWidth,
                      height: 50,
                      child: const Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            Icon(
                              Icons.upload,
                              color: Colors.grey,
                            ),
                            Text(
                              "Upload Property Pictures",
                              style: TextStyle(color: Colors.grey),
                            )
                          ]),
                    ),
                  ),
                ),
              ),
              const Padding(
                padding: EdgeInsets.all(8.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Icon(
                      Icons.square_outlined,
                      color: Colors.grey,
                    ),
                    Text(
                      "i agree to the terms and conditions of Bimal",
                      style: TextStyle(
                          color: Color.fromARGB(255, 124, 115, 115),
                          fontSize: 15),
                    )
                  ],
                ),
              ),
              Center(
                child: ElevatedButton(
                    onPressed: () {
                      print("Pressed");
                    },
                    style: ElevatedButton.styleFrom(
                      shape: ContinuousRectangleBorder(
                          borderRadius: BorderRadius.circular(25)),
                      backgroundColor: const Color(0xFF008F17),
                      minimumSize: const Size(double.infinity, 50),
                    ),
                    child: const Text(
                      "SUMBIT",
                      style: TextStyle(color: Colors.white),
                    )),
              )
            ],
          ),
        ),
      );
    
  }
}

class input extends StatelessWidget {
  input({super.key, required this.title});
  final OutlineInputBorder defaultBorder = OutlineInputBorder(
      borderRadius: BorderRadius.circular(10),
      borderSide: const BorderSide(color: Color.fromARGB(255, 234, 234, 234)));
  final String title;
  @override
  Widget build(BuildContext context) {
    return TextField(
        decoration: InputDecoration(
            contentPadding: const EdgeInsets.all(18),
            fillColor: const Color.fromARGB(255, 234, 234, 234),
            filled: true,
            hintText: title,
            focusedBorder: const OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(10)),
                borderSide: BorderSide(
                    color: Color.fromARGB(
                        255, 0, 0, 0)) // Change border color when focused
                ),
            border: defaultBorder,
            disabledBorder: defaultBorder,
            enabledBorder: defaultBorder));
  }
}
