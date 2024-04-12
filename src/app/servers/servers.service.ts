import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServersService {

  private servers = [
    {
      id: 1,
      name: 'Bosch 30" 3.7 Cu. Ft. True Convection 5-Burner Stove',
      description: "Experience the best of both worlds with the Bosch 800 Series gas range. This industrial-style range features a spacious 5-burner gas cooktop so you can whip up gourmet meals with precision. It's also equipped with a 3.7 cu. ft. true convection oven that keeps air flowing around your dishes so everything is cooked evenly and efficiently.",
      price: 3000,
      category: 'Appliances',
      photo: "../../assets/images/stove.jpeg"
    },
    {
      id: 2,
      name: 'Bosch 36" 21 Cu. Ft. Counter-Depth 4-Door French Door Refrigerator',
      description: "Keep your food fresh and close at hand with this 4-door Bosch refrigerator. The fridge's 21 cu ft. capacity provides plenty of room for all your groceries, while the FarmFresh system keeps the contents perfectly chilled. Its HomeConnect system connects to your home network for integration with Nest, Alexa, Fitbit, and more.",
      price: 1500,
      category: "Appliances",
      photo: "../../assets/images/fridge.jpeg"
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13.3" w/ Touch ID',
      description: "Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. Accelerate machine-learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever -- up to 18 hours.",
      price: 1299,
      category: "Computers",
      photo: "../../assets/images/macbook.jpeg"
    },
    {
      id: 4,
      name: 'Lenovo IdeaPad Flex 5 13.3" Touchscreen 2-in-1 Chromebook',
      description: "Step into the modern age of ultra-fast computing with the Lenovo IdeaPad Flex 5 2-in-1 Chromebook. It runs on an Intel Celeron CPU paired with 4GB of RAM that can handle everything you throw at it. Its connectivity options include USB Type-C ports for superfast data transfers and integrated Wi-Fi 6 and Bluetooth 5.0 for with excellent range.",
      price: 499,
      category: "Computers",
      photo: "../../assets/images/tablet.jpeg"
    },
    {
      id: 5,
      name: 'LG 50" 4K UHD HDR LED webOS Smart TV',
      description: 'The LG 55" smart TV offers a game-changing entertainment experience in the comfort of your home. With 4K UHD resolution and active HDR support, you can enjoy gaming, movies, and shows in vivid colours and sharp details. It is also equipped with webOS that provides access to your favourite streaming apps, and features a simple interface for easy browsing and smart control options.',
      price: 699,
      category: "TVs",
      photo: "../../assets/images/lgtv.jpeg"
    },
    {
      id: 6,
      name: 'Amazon Fire TV Stick 4K Max Media Streamer with Alexa Voice Remote',
      description: "Dive into 4K Ultra HD cinematic entertainment with the Amazon Fire TV Stick 4K Max Media Streamer. Equipped with a quad-core 1.8 GHz processor, Wi-Fi 6 support, and Alexa Voice Remote, this powerful streaming stcik delivers faster app starts and more fluid navigation. Enjoy vivid, lifelike colours with support for Dolby Vision, HDR 10, HDR10+, and the immersive audio of Dolby Atmos.",
      price: 59.99,
      category: "TVs",
      photo: "../../assets/images/firestick.jpeg"
    }
  ];

  getServers() {
    return this.servers;
  }

  getServersByCategory(category: string) {
    return this.servers.filter(server => server.category === category);
  }

  getProductById(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }
  



}