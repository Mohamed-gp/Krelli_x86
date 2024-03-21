import 'package:flutter/material.dart';
import 'package:kill/navigationbar.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  int selectedindex = 3;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BNavBar(
        // Replace MyCustomBottomNavigationBar with BNavBar
        selectedIndex: selectedindex,
        onItemTapped: (index) {
          setState(() {
            selectedindex = index;
          });
        },
      ),
      body: Container(
        alignment: Alignment.center,
        child: Column(
          children: [
            const SizedBox(height: 60),
            const Column(
              children: [
                CircleAvatar(
                  radius: 50,
                  backgroundColor: Colors.white,
                  backgroundImage: AssetImage("images/IMG_20240209_140730.jpg"),
                ),
                Text(
                  "Safi Achraf",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
                ),
                Text(
                  "safiachraf@gmail.com",
                  style: TextStyle(color: Colors.grey),
                )
              ],
            ),
            const SizedBox(height: 20),
            const SizedBox(
              width: 380,
              child: Divider(),
            ),
            const SizedBox(height: 10), // Add spacing
            const ProfileMenu(title: "Personal Details"),
            const SizedBox(height: 10), // Add spacing
            const ProfileMenu(
              title: "Settings",
              leadingIcon: Icon(Icons.settings),
            ),
            const SizedBox(height: 8), // Add spacing
            const ProfileMenu(
              title: "Payment Details",
              leadingIcon: Icon(Icons.payment),
            ),
            const SizedBox(height: 8), // Add spacing
            const ProfileMenu(
              title: "FAQ",
              leadingIcon: Icon(Icons.assistant_photo_rounded),
            ),
            const SizedBox(
              width: 380,
              child: Divider(),
            ),
            const SizedBox(height: 8), // Add spacing
            const ProfileMenu(
              title: "Switch to Landlord",
              leadingIcon: Icon(Icons.swap_vert),
            ),
            const SizedBox(height: 8), // Add spacing
            Container(
              width: 350,
              height: 50,
              decoration: BoxDecoration(
                color: const Color.fromARGB(255, 137, 98, 204),
                borderRadius: BorderRadius.circular(10),
              ),
              child: Center(
                child: InkWell(
                  onTap: () {
                    Navigator.pop(context);
                  },
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 16.0),
                    child: Row(
                      children: [
                        Expanded(
                          child: Text(
                            "Log out",
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.w400,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ProfileMenu extends StatelessWidget {
  const ProfileMenu({Key? key, required this.title, this.leadingIcon})
      : super(key: key);

  final String title;
  final Widget? leadingIcon;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      contentPadding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
      leading: Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(10),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.5),
              spreadRadius: 1,
              blurRadius: 3,
              offset: const Offset(0, 3),
            ),
          ],
        ),
        child: leadingIcon ??
            const Icon(Icons.account_circle, size: 30, color: Colors.black),
      ),
      title: Text(
        title,
        style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w400),
      ),
      onTap: () {},
      trailing:
          const Icon(Icons.arrow_forward_ios_outlined, color: Colors.grey),
    );
  }
}
