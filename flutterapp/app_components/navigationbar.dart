import 'package:flutter/material.dart';
import 'package:curved_labeled_navigation_bar/curved_navigation_bar.dart';
import 'package:curved_labeled_navigation_bar/curved_navigation_bar_item.dart';

class BNavBar extends StatefulWidget {
  const BNavBar(
      {Key? key,
      required int selectedIndex,
      required Null Function(dynamic index) onItemTapped})
      : super(key: key);

  @override
  State<BNavBar> createState() => _BNavBarState();
}

class _BNavBarState extends State<BNavBar> {
  int selectedIndex = 4;

  @override
  Widget build(BuildContext context) {
    return CurvedNavigationBar(
      animationDuration: Durations.medium1,
      backgroundColor: Colors.white,
      color: Colors.deepPurple,
      index: selectedIndex,
      onTap: (index) {
        setState(() {
          selectedIndex = index;
        });
      },
      items: <CurvedNavigationBarItem>[
        CurvedNavigationBarItem(
            label: "Home",
            child: SizedBox(
              height: 30,
              child: Image.asset("images/home.png"),
            ),
            labelStyle: const TextStyle(
                fontSize: 17,
                fontWeight: FontWeight.w500,
                fontFamily: 'MadimiOne')),
        CurvedNavigationBarItem(
            label: "Chat",
            child: SizedBox(
              height: 30,
              child: Image.asset("images/chat.png"),
            ),
            labelStyle: const TextStyle(
                fontSize: 17,
                fontWeight: FontWeight.w500,
                fontFamily: 'MadimiOne')),
        CurvedNavigationBarItem(
          label: "Find",
          labelStyle: const TextStyle(
              fontSize: 17,
              fontWeight: FontWeight.w500,
              fontFamily: 'MadimiOne'),
          child: SizedBox(
            height: 35,
            child: Image.asset("images/house.png"),
          ),
        ),
        CurvedNavigationBarItem(
            label: "Saved",
            child: SizedBox(
              height: 30,
              child: Image.asset("images/heart.png"),
            ),
            labelStyle: const TextStyle(
                fontSize: 17,
                fontWeight: FontWeight.w500,
                fontFamily: 'MadimiOne')),
        CurvedNavigationBarItem(
            label: "Profile",
            child: SizedBox(
              height: 30,
              child: Image.asset("images/user (1).png"),
            ),
            labelStyle: const TextStyle(
                fontSize: 17,
                fontWeight: FontWeight.w500,
                fontFamily: 'MadimiOne')),
      ],
    );
  }
}
