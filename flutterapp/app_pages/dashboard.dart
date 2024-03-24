import 'package:flutter/material.dart';


class Dashboard extends StatelessWidget {
  const Dashboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double maxHeight = MediaQuery.of(context).size.height;
    double maxWidth = MediaQuery.of(context).size.width;

    return Scaffold(
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(
              height: 40,
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Icon(
                      Icons.keyboard_arrow_left_rounded,
                      size: 50,
                    ),
                    Text(
                      "Dashboard",
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.w600),
                    ),
                    Icon(Icons.file_copy_outlined)
                  ]),
            ),
            SizedBox(
              height: maxHeight * 0.02,
            ),
            const Padding(
              padding: EdgeInsets.only(left: 15),
              child: Text(
                "Welcome, Bimal",
                style: TextStyle(fontWeight: FontWeight.w900, fontSize: 30),
              ),
            ),
            SizedBox(
              height: maxHeight * 0.01,
            ),
            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Seller_Panel(
                    colour: "0xFF3DC8AC", number: "8", title: "Total Property"),
                Seller_Panel(
                    colour: "0xFFF68070", number: "2", title: "Total Tenant"),
              ],
            ),
            SizedBox(
              height: maxHeight * 0.02,
            ),
            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Wallet(
                    price: "2500",
                    logo: Icons.wallet,
                    title: "payment received",
                    colour: Colors.black),
                Wallet(
                  price: "2500",
                  logo: Icons.remove_red_eye,
                  title: "Total Views",
                  colour: Color.fromRGBO(35, 124, 213, 1),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Card(
                child: Column(children: [
                  const Padding(
                    padding: EdgeInsets.only(left: 8),
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Text(
                        "Complaints",
                        style: TextStyle(
                            fontSize: 30, fontWeight: FontWeight.w800),
                      ),
                    ),
                  ),
                  const Padding(
                    padding: EdgeInsets.only(top: 8, left: 8, right: 8),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          "tenants",
                          style: TextStyle(
                              color: Color.fromARGB(255, 124, 124, 124)),
                        ),
                        Text("complaints",
                            style: TextStyle(
                                color: Color.fromARGB(255, 124, 124, 124))),
                        Text("sevierity",
                            style: TextStyle(
                                color: Color.fromARGB(255, 124, 124, 124)))
                      ],
                    ),
                  ),
                  const Padding(
                    padding: EdgeInsets.only(left: 8, right: 8),
                    child: Divider(
                      color: Color.fromARGB(
                          165, 176, 176, 176), // Set the color of the divider
                      thickness: 3, // Set the thickness of the divider
                    ),
                  ),
                  const Complaint(),
                  const Complaint(),
                  const Complaint(),
                  const Complaint(),
                  const Complaint(),
                  SizedBox(
                    height: 40,
                    child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: 6,
                      itemBuilder: (BuildContext context, int index) {
                        return SizedBox(
                          width: (MediaQuery.of(context).size.width / 6) -
                              5, // Divide the width equally
                          height: 100, // Set th
                          child: Card(
                              shadowColor: Colors.white,
                              color: const Color.fromARGB(255, 244, 240, 240),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(
                                    7), // Adjust border radius as needed
                                side: const BorderSide(
                                  color: Color.fromARGB(255, 244, 240,
                                      240), // Set the color of the border
                                  width: 0, // Set the width of the border
                                ),
                              ),
                              margin: const EdgeInsets.only(
                                  left: 12, right: 12, top: 4, bottom: 4),
                              child: Center(
                                child: Text(
                                  (index + 1).toString(),
                                  style: const TextStyle(
                                      fontWeight: FontWeight.w400,
                                      fontSize: 17),
                                ),
                              )),
                        );
                      },
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  )
                ]),
              ),
            )
          ],
        ),
      );
  
  }
}

class Complaint extends StatelessWidget {
  const Complaint({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        Padding(
          padding: EdgeInsets.only(left: 8, right: 8),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "Ramesh D",
                style: TextStyle(fontWeight: FontWeight.w500),
              ),
              Text("water tank leakage kda mna malhih",
                  style: TextStyle(fontWeight: FontWeight.w400)),
              Icon(
                Icons.circle,
                color: Colors.green,
                size: 22,
              )
            ],
          ),
        ),
        Padding(
          padding: EdgeInsets.only(left: 8.0, right: 8),
          child: Divider(
            color: Color.fromARGB(
                165, 176, 176, 176), // Set the color of the divider
            thickness: 1.5, // Set the thickness of the divider
          ),
        ),
      ],
    );
  }
}

class Wallet extends StatelessWidget {
  const Wallet(
      {super.key,
      required this.title,
      required this.price,
      required this.logo,
      required this.colour});
  final String title;
  final String price;
  final IconData logo;
  final Color colour; // Change the type to IconData for the logo
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: SizedBox(
        width: 200,
        child: Card(
          margin: const EdgeInsets.all(10),
          child: Padding(
            padding: const EdgeInsets.all(25.0),
            child: Column(children: [
              Icon(
                logo,
                size: 70,
                color: colour,
              ),
              Text(
                title,
                style:
                    const TextStyle(fontWeight: FontWeight.w500, fontSize: 15),
              ),
              Text(
                "\$$price",
                style: const TextStyle(color: Color(0xFFF2994A)),
              )
            ]),
          ),
        ),
      ),
    );
  }
}

class Seller_Panel extends StatelessWidget {
  const Seller_Panel(
      {super.key,
      required this.title,
      required this.number,
      required this.colour});
  final String title;
  final String number;
  final String colour;
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 195,
      child: Card(
        color: Color(int.parse(colour.substring(2), radix: 16)),
        child: Padding(
          padding:
              const EdgeInsets.only(top: 30, left: 10, right: 5, bottom: 5),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: const TextStyle(
                    fontWeight: FontWeight.w800,
                    color: Colors.white,
                    fontSize: 16),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.end, // Align to the end
                children: [
                  Container(
                    // THIS LINE CHATGPT
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                        color: Colors.white,
                        shape: BoxShape.circle,
                        border: Border.all(width: 1, color: Colors.white)),

                    child: Text(
                      number,
                      textAlign: TextAlign.end,
                      style: TextStyle(
                        fontSize: 15,
                        color: Color(int.parse(colour.substring(2), radix: 16)),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
