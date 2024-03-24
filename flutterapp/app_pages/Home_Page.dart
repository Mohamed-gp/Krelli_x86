import 'package:dodo/add_listing.dart';
import 'package:flutter/material.dart';

class home_page extends StatelessWidget {
  const home_page({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    final List houses = ["lake.jpg", "house.jpg"];
    return  Scaffold(
          body: Padding(
            padding: const EdgeInsets.all(8.0),
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(
                    height: 50,
                  ),
                  const Text(
                    "Your current locations",
                    style: TextStyle(
                        fontSize: 20,
                        color: Color.fromARGB(255, 143, 142, 142)),
                  ),
                  const SizedBox(
                    height: 5,
                  ),
                  const Row(
                    children: [
                      SizedBox(
                        width: 5,
                      ),
                      Icon(
                        Icons.location_on,
                        size: 40,
                        color: Color.fromARGB(255, 133, 0, 235),
                      ),
                      SizedBox(
                        width: 10,
                      ),
                      Text(
                        "Bouddha, kathmandu  ",
                        style: TextStyle(
                            fontSize: 25, fontWeight: FontWeight.w700),
                      ),
                      Icon(
                        Icons.keyboard_arrow_down_rounded,
                        size: 30,
                      )
                    ],
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  const Padding(
                    padding: EdgeInsets.all(12.0),
                    child: TextField(
                      decoration: InputDecoration(
                        contentPadding: EdgeInsets.all(20),
                        fillColor: Color.fromARGB(168, 233, 233, 233),
                        filled: true,
                        suffixIcon: Icon(Icons.format_list_bulleted_sharp),
                        prefixIcon: Icon(
                          Icons.search,
                          size: 30,
                        ),
                        hintText: "Search address, City, Location",
                        enabledBorder: OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.white10),
                            borderRadius:
                                BorderRadius.all(Radius.circular(30))),
                        focusedBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                                color: Color.fromARGB(255, 255, 255, 255)),
                            borderRadius:
                                BorderRadius.all(Radius.circular(30))),
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  const Center(
                    child: Text(
                      "Welcome to krelli",
                      style:
                          TextStyle(fontWeight: FontWeight.w800, fontSize: 25),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  const Text(
                    "Near your location",
                    style: TextStyle(fontWeight: FontWeight.w700, fontSize: 30),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  const Row(
                    children: [
                      Text(
                        "243 properties in Subaraya",
                        style: TextStyle(
                            color: Color.fromARGB(255, 127, 127, 127),
                            fontWeight: FontWeight.w700),
                      ),
                      SizedBox(
                        width: 170,
                      ),
                      Text(
                        "see all",
                        style: TextStyle(
                            color: Color.fromARGB(255, 133, 0, 235),
                            fontSize: 16),
                      )
                    ],
                  ),
                  SizedBox(
                    height: 225,
                    child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: 2,
                      itemBuilder: (BuildContext context, int index) {
                        return InfoCard(
                            photo: houses[index], title: "ss", price: 21);
                      },
                    ),
                  ),
                  const Row(
                    children: [
                      Text(
                        "Top rated",
                        style: TextStyle(
                            fontSize: 25,
                            color: Color.fromARGB(255, 0, 0, 0),
                            fontWeight: FontWeight.w900),
                      ),
                      SizedBox(
                        width: 235,
                      ),
                      Text(
                        "see all",
                        style: TextStyle(
                            color: Color.fromARGB(255, 133, 0, 235),
                            fontSize: 16),
                      )
                    ],
                  ),
                  SizedBox(
                    height: 225,
                    child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: 2,
                      itemBuilder: (BuildContext context, int index) {
                        return InfoCard(
                            photo: houses[index], title: "ss", price: 21);
                      },
                    ),
                  ),
                  const SizedBox(
                    height: 40,
                  ),
                  const Text("International Migrations",
                      style:
                          TextStyle(fontWeight: FontWeight.w700, fontSize: 27)),
                  const SizedBox(
                    height: 20,
                  ),
                  SizedBox(
                    height: 225,
                    child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: 2,
                      itemBuilder: (BuildContext context, int index) {
                        return const Padding(
                          padding: EdgeInsets.symmetric(
                              horizontal: 8.0), // Add padding for spacing
                          child: InterCard(),
                        );
                      },
                    ),
                  ),
                  Card(
                    clipBehavior: Clip.antiAlias,
                    shape: const RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(20)),
                      side: BorderSide(
                        color: Colors.white,
                      ),
                    ),
                    color: const Color(0xFF4561EC),
                    child: Row(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(12.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                "Want to host\n your own \nplace?",
                                style: TextStyle(
                                    fontWeight: FontWeight.w700,
                                    fontSize: 25,
                                    color: Colors.white),
                              ),
                              const Text(
                                "Earn passive income by\n renting or selling your \nproperty",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.w600),
                              ),
                              ElevatedButton(
                                  onPressed: () {
                                      Navigator.push(context, MaterialPageRoute(builder: (context) => add_listing(),));
                                  },
                                  child: const Text(
                                    "Add property now",
                                    style: TextStyle(
                                        fontWeight: FontWeight.w800,
                                        color: Color(0xFF4561EC)),
                                  ))
                            ],
                          ),
                        ),
                        const SizedBox(
                          width: 40,
                        ),
                        const SizedBox(
                          height: 200,
                          width: 145, // Set a desired height for the image
                          child: Image(
                            image: AssetImage("assets/images/lake.jpg"),
                            fit: BoxFit.cover, // Ensure image covers the space
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),
        );
  }
}

class InterCard extends StatelessWidget {
  const InterCard({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Card(
      child: Column(
        children: [
          SizedBox(
            width: 150, // Adjust the width as needed
            height: 150, // Adjust the height as needed
            child: Image(
              image: AssetImage("assets/images/house.jpg"),
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Column(
              children: [
                Text(
                  "Bali, Indonesia",
                  style: TextStyle(fontWeight: FontWeight.w800, fontSize: 20),
                ),
                Text(
                  "345 rented props",
                  style: TextStyle(color: Colors.grey, fontSize: 15),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class MigrationCard extends StatelessWidget {
  const MigrationCard({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Card(
      child: Column(children: [
        Image(
          image: AssetImage("assets/images/house.jpg"),
          fit: BoxFit.fill,
        ),
        SizedBox(
          height: 20,
        ),
        Text(
          "Bali, Indonesia",
          style: TextStyle(
            fontWeight: FontWeight.w700,
            fontSize: 20,
          ),
        ),
        Text(
          "345 rented props",
          style: TextStyle(color: Colors.grey),
        )
      ]),
    );
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
              fit: BoxFit.fill, // Ensure image covers the space
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
                Row(
                  children: [
                    Icon(
                      Icons.bed_rounded,
                      color: Color.fromARGB(255, 107, 107, 107),
                    ),
                    SizedBox(
                      width: 3,
                    ),
                    Text(
                      " 2 room",
                      style: TextStyle(color: Colors.grey, fontSize: 15),
                    ),
                    SizedBox(
                      width: 20,
                    ),
                    Icon(
                      Icons.other_houses_sharp,
                      color: Color.fromARGB(255, 113, 113, 113),
                    ),
                    SizedBox(
                      width: 10,
                    ),
                    Text(
                      "678 m2",
                      style: TextStyle(color: Colors.grey),
                    )
                  ],
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
                    SizedBox(
                      width: 90,
                    ),
                    Icon(
                      Icons.favorite_border_outlined,
                      color: Colors.grey,
                    )
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
