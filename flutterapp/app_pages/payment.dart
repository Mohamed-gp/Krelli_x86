import 'package:flutter/material.dart';
import 'package:dotted_border/dotted_border.dart';
import '';

class payment extends StatelessWidget {
  const payment({Key? key}) : super(key: key);

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
        padding: const EdgeInsets.all(13.0),
        child: Column(
          children: [
            SizedBox(
              height: maxHeight * 0.05,
            ),
            Row(
              children: [
                const Icon(Icons.arrow_back),
                SizedBox(
                  width: maxWidth * 0.05,
                ),
                const Text(
                  "Advance Payment",
                  style: TextStyle(fontSize: 25, fontWeight: FontWeight.w700),
                )
              ],
            ),
            const SizedBox(
              height: 15,
            ),
            const InfoCard(
                title: "sds", photo: "house_islem.jpg", price: 21),
            const SizedBox(
              height: 15,
            ),
            const Card(
              child: Padding(
                padding: EdgeInsets.all(20.0),
                child: Column(children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Price Details ",
                        style: TextStyle(
                            fontSize: 20, fontWeight: FontWeight.w600),
                      ),
                      Text(
                        "More info",
                        style: TextStyle(
                            color: Color(0xFF4561EC),
                            fontWeight: FontWeight.w600),
                      )
                    ],
                  ),
                  SizedBox(
                    height: 15,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Total price ",
                        style: TextStyle(
                            fontSize: 20, fontWeight: FontWeight.w600),
                      ),
                      Text(
                        " \$500   ",
                        style: TextStyle(
                            color: Color(0xFF4561EC),
                            fontWeight: FontWeight.w900),
                      )
                    ],
                  )
                ]),
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            Card(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      "Pay with",
                      style:
                          TextStyle(fontWeight: FontWeight.bold, fontSize: 27),
                    ),
                    const SizedBox(
                      height: 15,
                    ),
                    Row(
                      children: [
                        const SizedBox(
                          height: 25,
                          width: 25,
                          child: Image(
                              image: AssetImage("assets/images/credcard.png")),
                        ),
                        SizedBox(
                          width: maxWidth * 0.05,
                        ),
                        const Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "Debit Card",
                              style: TextStyle(
                                fontWeight: FontWeight.w400,
                                fontSize: 18,
                              ),
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Text(
                              "Accepting visa ,Mastercard, etc",
                              style: TextStyle(
                                  fontSize: 15,
                                  color: Color.fromARGB(255, 131, 131, 131)),
                            )
                          ],
                        ),
                        const Spacer(),
                        const SizedBox(
                          height: 25,
                          width: 25,
                          child: Image(
                              image: AssetImage("assets/images/plus.png")),
                        )
                      ],
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Row(
                      children: [
                        const SizedBox(
                          height: 25,
                          width: 25,
                          child: Image(
                              image: AssetImage("assets/images/google.png")),
                        ),
                        SizedBox(
                          width: maxWidth * 0.05,
                        ),
                        const Text(
                          "Google Pay",
                          style: TextStyle(
                              fontWeight: FontWeight.w400, fontSize: 18),
                        ),
                        const Spacer(),
                        const Align(
                          alignment: Alignment.centerRight,
                          child: SizedBox(
                            height: 25,
                            width: 25,
                            child: Image(
                                image: AssetImage("assets/images/plus.png")),
                          ),
                        )
                      ],
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Row(
                      children: [
                        const SizedBox(
                          height: 25,
                          width: 25,
                          child: Image(
                              image: AssetImage("assets/images/apple.png")),
                        ),
                        SizedBox(
                          width: maxWidth * 0.05,
                        ),
                        const Text(
                          "Apple Pay",
                          style: TextStyle(
                              fontWeight: FontWeight.w400, fontSize: 18),
                        ),
                        const Spacer(),
                        const Align(
                          alignment: Alignment.centerRight,
                          child: SizedBox(
                            height: 25,
                            width: 25,
                            child: Image(
                                image: AssetImage("assets/images/plus.png")),
                          ),
                        )
                      ],
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Row(
                      children: [
                        const SizedBox(
                          height: 25,
                          width: 25,
                          child: Image(
                              image: AssetImage("assets/images/paypal.png")),
                        ),
                        SizedBox(
                          width: maxWidth * 0.05,
                        ),
                        const Text(
                          "Paypal",
                          style: TextStyle(
                              fontWeight: FontWeight.w400, fontSize: 18),
                        ),
                        const Spacer(),
                        const Align(
                          alignment: Alignment.centerRight,
                          child: SizedBox(
                            height: 25,
                            width: 25,
                            child: Image(
                                image: AssetImage("assets/images/plus.png")),
                          ),
                        )
                      ],
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            ElevatedButton(
                style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF4561EC),
                    minimumSize: const Size(double.infinity, 50)),
                onPressed: () {
                  print("fssf");
                },
                child: const Text(
                  "Pay in advance",
                  style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w800,
                      fontSize: 17),
                ))
          ],
        ),
      ));
    
  }
}

class InfoCard extends StatelessWidget {
  const InfoCard(
      {super.key,
      required this.title,
      required this.photo,
      required this.price});

  @override
  final String title;
  final String photo;
  final int price;
  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.all(0),
      clipBehavior: Clip.antiAlias,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(20)),
        side: BorderSide(
          color: Colors.white,
        ),
      ),
      color: const Color.fromRGBO(255, 255, 255, 1),
      child: Row(
        children: [
          SizedBox(
            height: 235,
            width: 145, // Set a desired height for the image
            child: Image(
              image: AssetImage("assets/images/$photo"),
              fit: BoxFit.fitHeight, // Ensure image covers the space
            ),
          ),
          const Padding(
            padding: EdgeInsets.all(12.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Icon(
                      Icons.star,
                      color: Color.fromARGB(255, 238, 217, 27),
                    ),
                    Text(
                      "4.8 ",
                      style: TextStyle(fontWeight: FontWeight.w600),
                    ),
                    Text(
                      "(73)",
                      style:
                          TextStyle(color: Color.fromARGB(255, 118, 118, 118)),
                    )
                  ],
                ),
                SizedBox(
                  height: 10,
                ),
                Text(
                  "Small cottege with ",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
                ),
                Text(
                  "great view of bagmati ",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
                ),
                SizedBox(
                  height: 5,
                ),
                Text(
                  "Kaghdari,Kathamndu",
                  style: TextStyle(color: Colors.grey),
                ),
                SizedBox(
                  height: 10,
                ),
                SizedBox(
                  height: 10,
                ),
                Row(
                  children: [
                    Text(
                      "\$542",
                      style:
                          TextStyle(fontWeight: FontWeight.w900, fontSize: 20),
                    ),
                    Text(
                      " / month",
                      style: TextStyle(color: Colors.grey),
                    ),
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
