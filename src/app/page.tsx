"use client";
    
import React, { useRef } from 'react';
import Footer from './Footer/page';



const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);
  const recipesRef = useRef<HTMLDivElement>(null);

  // Scroll to the specified section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ width: '1320px', height: '873px', position: 'relative' }}>
  <img
    style={{ width: '100%', height: '100%', opacity: 0.95, position: 'absolute', top: 0, left: 0, zIndex: 1 }}
    src="images/head.jpg"
    alt="Background"
  />

<div style={{ position: 'relative', width: '1156.07px', height: '715.78px', zIndex: 2  }}>

      
      <div style={{ width: '294px', height: '38px', position: 'absolute', left: '587.09px', top: '22px' }}>
      <div onClick={() => scrollToSection(aboutRef)} style={{left: 0, top: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', position: 'absolute', color: '#FFF2F2', fontSize: 29.70, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word',cursor: 'pointer' }}>
          About
        </div>
        <div onClick={() => scrollToSection(shopRef)}  style={{left: 135, top: 2,textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', position: 'absolute', color: '#FFF2F2', fontSize: 29.70, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word',cursor: 'pointer' }}>
          SHOP
        </div>
        <div onClick={() => scrollToSection(recipesRef)} style={{left: 260, top: 0,textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', position: 'absolute', color: '#FFFDFD', fontSize: 29.70, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word',cursor: 'pointer' }}>
          RECIPES
        </div>
      </div>

      <div style={{width: 35.89, height: 35.89, left: 1119.81, top: 24.44, position: 'absolute', borderTopLeftRadius: 8864.21, borderTopRightRadius: 8864.21, borderBottomRightRadius: 8864.21, borderBottomLeftRadius: 8864.21, overflow: 'hidden'}}>
      <img style={{width: 39.76, height: 39.76, left: -1.88, top: -1.88, position: 'absolute'}} src="images/Momin.jpg" />
    </div>
    <div style={{width: 483.52, height: 715.78, left: 0, top: 0, position: 'absolute'}}>
      <div style={{width: 358.95, height: 634.49, left: 60, top: 0, position: 'absolute', background: 'black'}}>
        <div style={{left: 95, top: 30, position: 'absolute', color: 'white',textShadow: '0 0 25px #FF0000', fontSize: 53.65, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>omin’s </div>
        <div style={{left: 102, top: 75, position: 'absolute', color: 'white', fontSize: 53.47,textShadow: '0 0 25px #FF0000', fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Kitchen</div>
        <div style={{left: 1, top: 15.17, position: 'absolute',  transformOrigin: '0 0',textShadow: '0 0 25px #FF0000', color: 'white', fontSize: 105.88, fontFamily: 'Abril Fatface', fontWeight: '400', wordWrap: 'break-word'}}>M</div>
      </div>
      <img style={{width: 483.52, height: 498.30, left: 0, top: 217.48, position: 'absolute'}} src="images/salad.png" />
    </div>
    <div style={{width: 658.78, height: 439.18, left: 515, top: 130.08, position: 'absolute'}}>
      <div style={{width: 658.78, height: 402.63, left: 0, top: 0, position: 'absolute'}}>
        <div style={{width: 658.78, height: 102.41, left: 0, top: 0, position: 'absolute'}}><span style={{color: '#D9181B',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontSize: 75, fontFamily: 'Katibeh', fontWeight: '400'}}>HEALTHY SALAD</span>
        <div style={{width: 493.03, left: 0, top: 87.63, position: 'absolute', color: 'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontSize: 25.96, fontFamily: 'Afacad', fontWeight: '400', wordWrap: 'break-word'}}>A healthy salad combines fresh, crisp greens, colorful vegetables, and wholesome toppings<br/> like avocado, nuts, or seeds, all brought together with a light, tangy dressing. It's the perfect balance of flavors and nutrients, providing a refreshing, satisfying meal that's packed with vitamins, fiber, and healthy fats to nourish your body while keeping things light and delicious.</div>
      </div>
      <div style={{width: 139.36, height: 38.01, left: 275, top: 550, position: 'absolute', background: 'black'}}>
        <div style={{left: 14, top: 1, position: 'absolute', color: 'white', fontSize: 25, fontFamily: 'Katibeh', fontWeight: '400'}}>Order Now</div>
      </div>
    </div>
    <div style={{width: 67, height: 46.57, left: 300, top: 430, position: 'absolute'}}>
      <div style={{width: 57.91, height: 39.71, left: 0, top: 0, position: 'absolute',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', color: '#E80000', fontSize: 45, fontFamily: 'Katibeh', fontWeight: '400'}}>$29</div>
      <div style={{left: 10, top: 60, position: 'absolute', color: 'white', fontSize: 12.69,textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontFamily: 'Katibeh', fontWeight: '410'}}>TOTAL PAYABLE</div>
    </div>
  </div>
  </div>

  


  <div ref={aboutRef} style={{width: 1320, height: 1600, position: 'relative' }}>
    <img
      style={{ width: '100%', height: '100%', position: 'absolute', opacity: 0.90, top: 0, left: 0 }}
      src="images/about.jpg"
      alt="Background"
    />
    <div style={{ width: 1139.30, height: 1054, position: 'absolute', left: 90, top: 311 }}>
      <div
        style={{
          top: 260,
          width: 623,
          height: 745,
          position: 'absolute',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          fontSize: 32.50,
          fontFamily: 'Afacad',
          fontWeight: '400',
          wordWrap: 'break-word',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Welcome to Momin's Kitchen, where we have created a dining experience fueled by our love and passion for food. Our mission is to provide you with authentic and delicious dishes that make you feel right at home. Established in 2022, Momin's Kitchen aims to offer not just a meal but a memorable experience. We use fresh ingredients and incorporate cultural flavors into every dish, ensuring a unique culinary journey for our guests. Our talented team is always ready to provide you with the best service, as we believe that the secret to happiness lies in good food. Come join us at Momin's Kitchen and be a part of this delightful journey!
      </div>
      <div
        style={{
          top: 0,
          width: 650.87,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          position: 'absolute',
          color: 'white',
          fontSize: 80,
          fontFamily: 'Katibeh',
          fontWeight: '300',
       
         
        }}
      >
        ABOUT MOMIN’S KITCHEN
      </div>
      <div style={{ width: 408.87, height: 657, position: 'absolute', left: 730.44, top: 262 }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 150,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 150,
          }}
          src="images/about item.jpg"
          alt="About Momin's Kitchen"
        />
      </div>
    </div>
  </div>
  
  

  
  





  


<div ref={shopRef} style={{width: 1320, height: 2000, position: 'relative'}}>
  <img style={{width: '100%', height: '100%' , left: 0, top: 0, position: 'absolute', border: '1px black solid'}} src="images/menu.jpg" />
  <div style={{width: 1175, height: 1804, left: 87, top: 68, position: 'absolute'}}>
    <div style={{left: 874, top: 942, position: 'absolute', color: 'black', fontSize: 21.05, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Crispy cauliflower florets <br/>tossed in a tangy and spicy<br/>     Manchurian sauce.</div>
    <div style={{left: 22, top: 554, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Crispy, spicy, and delicious, served<br/>              with lemon wedges.</div>
    <div style={{left: 21, top: 130, position: 'absolute', color: 'black', fontSize: 29.64,textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontFamily: 'Afacad', fontWeight: '400', wordWrap: 'break-word'}}>"Discover a delicious selection of dishes crafted with fresh ingredients and authentic flavors.<br/>There's something for every taste!"</div>
    <div style={{width: 1114, height: 1709, left: 0, top: 0, position: 'absolute'}}>
      <div style={{width: 288.25, height: 235.47, left: 19.10, top: 300.83, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 92.75, top: 21.82, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$26</div>
          <div style={{left: 97.28, top: 129.10, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Keraka <br/>Fish Fry</div>
        </div>
        <img style={{width: 186.41, height: 186.37, left: 0, top: 0, position: 'absolute'}} src="images/fish.png" />
      </div>
      <div style={{width: 305.53, height: 260.02, left: 394.64, top: 275.28, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 110.03, top: 46.37, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Chicken <br/>Karahi</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$24</div>
        </div>
        <img style={{width: 264.60, height: 224.56, left: 0, top: 0, position: 'absolute'}} src="images/karahi.png" />
      </div>
      <div style={{width: 375.98, height: 387.30, left: 715.21, top: 148, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 180.47, top: 173.65, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$25</div>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Chilli<br/>Paneer</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
        </div>
        <img style={{width: 360.09, height: 357.29, left: 0, top: 0, position: 'absolute'}} src="images/chilli paneer.png" />
      </div>
      <div style={{width: 305.53, height: 260.02, left: 3.64, top: 664.39, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 110.03, top: 46.37, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Grill Steak <br/>and Potatoes</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$21</div>
        </div>
        <img style={{width: 224.60, height: 224.56, left: 0, top: 0, position: 'absolute'}} src="images/grill steak.png" />
      </div>
      <div style={{width: 312.81, height: 296.38, left: 387.37, top: 626.21, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 117.30, top: 82.73, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Chicken<br/>Biryani</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$23</div>
        </div>
        <img style={{width: 241.88, height: 285.83, left: 0, top: 0, position: 'absolute'}} src="images/biryani.png" />
      </div>
      <div style={{width: 315.53, height: 337.29, left: 775.65, top: 585.30, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 120.03, top: 123.64, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Gobi<br/>Manchurian</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$23</div>
        </div>
        <img style={{width: 315.53, height: 315.47, left: 0, top: 0, position: 'absolute'}} src="images/gobi.png" />
      </div>
      <div style={{width: 305.53, height: 260.02, left: 0, top: 1052.60, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 110.03, top: 46.37, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Chicken <br/>Nihari</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$23</div>
        </div>
        <img style={{width: 207.32, height: 210.28, left: 0, top: 0, position: 'absolute'}} src="images/nihari.png" />
      </div>
      <div style={{width: 322.81, height: 290.93, left: 377.37, top: 1021.69, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 127.30, top: 87.28, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Pasta</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$23</div>
        </div>
        <img style={{width: 267.34, height: 300.29, left: 0, top: 0, position: 'absolute' }} src="images/pasta.png" />
      </div>
      <div style={{width: 311.90, height: 269.11, left: 779.29, top: 1043.51, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 116.39, top: 55.46, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Pizza</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$23</div>
        </div>
        <img style={{width: 224.60, height: 224.56, left: 0, top: 0, position: 'absolute'}} src="images/pizza.png" />
      </div>
      <div style={{width: 305.53, height: 260.01, left: 1.82, top: 1448.98, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 110.03, top: 46.37, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Crispy Fried<br/>Eggs</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$23</div>
        </div>
        <img style={{width: 224.60, height: 224.56, left: 0, top: 0, position: 'absolute'}} src="images/egg.png" />
      </div>
      <div style={{width: 305.53, height: 260.01, left: 394.64, top: 1448.98, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 110.03, top: 46.37, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Mixed<br/>Vegetable</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$23</div>
        </div>
        <img style={{width: 215.51, height: 215.47, left: 0, top: 0, position: 'absolute'}} src="images/mixed vegetable.png" />
      </div>
      <div style={{width: 305.53, height: 260.01, left: 787.47, top: 1448.98, position: 'absolute'}}>
        <div style={{width: 195.50, height: 213.65, left: 110.03, top: 46.37, position: 'absolute', background: '#171717', borderRadius: 16.36, overflow: 'hidden'}}>
          <div style={{left: 79.10, top: 136.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>Pea Pulao</div>
          <div style={{left: 14.55, top: 185.47, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>5.0</div>
          <div style={{left: 148.19, top: 36.37, position: 'absolute', color: 'white', fontSize: 23.61, fontFamily: 'Katibeh', fontWeight: '400', wordWrap: 'break-word'}}>$23</div>
        </div>
        <img style={{width: 210.96, height: 210.92, left: 0, top: 0, position: 'absolute'}} src="images/pulao.png" />
      </div>
      <div style={{width: 200.05, left: 19, top: 20, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', position: 'absolute', color: 'black', fontSize: 90.61, fontFamily: 'Katibeh', fontWeight: '400'}}>MENU</div>
      <div style={{left: 455, top: 550, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Tender chicken cooked in<br/>        traditional spices.</div>
      <div style={{left: 787, top: 550, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>A spicy Indo-Chinese fusion <br/> dish with cottage cheese.</div>
      <div style={{left: 421, top: 942, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Flavorful basmati rice with marinated<br/>                  chicken and spices.</div>
      <div style={{left: 20, top: 1336, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Slow-cooked chicken stew in a<br/>       flavorful, spiced broth.</div>
    </div>
    <div style={{left: 23, top: 946, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Juicy steak grilled to perfection with<br/>      a side of roasted potatoes.</div>
    <div style={{left: 28, top: 1734, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Perfectly fried eggs with golden<br/>  edges, seasoned with herbs.</div>
    <div style={{left: 420, top: 1340, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Creamy, cheesy pasta with fresh<br/>         vegetables and herbs.</div>
    <div style={{left: 781, top: 1340, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Classic pepperoni pizza with melted<br/>        cheese and a crispy crust.</div>
    <div style={{left: 417, top: 1734, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Stir-fried seasonal vegetables, lightly<br/>          spiced for a healthy bite.</div>
    <div style={{left: 824, top: 1734, position: 'absolute', color: 'black', fontSize: 25.93, fontFamily: 'Afacad',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: '400', wordWrap: 'break-word'}}>Fragrant basmati rice cooked with        fresh peas and spices.</div>
  </div>
</div>




<div ref={recipesRef} style={{ width: 1320, height: 1999.51, position: 'relative' }}>
  <img
    style={{
      
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      position: 'absolute',
      opacity: 0.90,
    }}
    src="images/recipe.jpg"
  />
  <div style={{ width: 1296, height: 1588, left: 8, top: 250, position: 'absolute' }}>
    <div
      style={{
        left: 90,
        top: -12,
        position: 'absolute',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        fontSize: 115,
        fontFamily: 'Katibeh',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      Delicious Recipes
      <br />
      from Momin's Kitchen
    </div>
    <div
      style={{
        width: 415,
        height: 873,
        left: 110,
        top: 487,
        position: 'absolute',
        background: 'black',
        borderRadius: 18,
      }}
    />
    <div
      style={{
        left: 124,
        top: 813,
        position: 'absolute',
        color: 'white',
        fontSize: 35.14,
        fontFamily: 'Katibeh',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      Description
    </div>
    <div
      style={{
        width: 264.89,
        left: 295,
        top: 830,
        position: 'absolute',
        color: 'white',
        fontSize: 18.43,
        fontFamily: 'Afacad',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      :Aromatic Chicken Biryani <br /> with tender chicken and <br /> fragrant basmati rice, perfect
      <br /> for any occasion.
    </div>

    <div
      style={{
        left: 124,
        top: 954,
        position: 'absolute',
        color: 'white',
       
        fontFamily: 'Katibeh',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
  
    </div>
    <div
      style={{
        width: 9,
        height: 55,
        left: 290,
        top: 967,
        position: 'absolute',
        color: 'white',
        fontSize: 20.99,
        fontFamily: 'Katibeh',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      :
    </div>
    <img
      style={{ width: 500, height: 500, left: 0, top: 334, position: 'absolute' }}
      src="images/reciipe 1.png"
    />
    <div
      style={{
        width: 415,
        height: 873,
        left: 773,
        top: 487,
        position: 'absolute',
        background: 'black',
        borderRadius: 18,
      }}
    />
    <div style={{ width: 338, height: 352.70, left: 128, top: 1000.30, position: 'absolute' }}>
      <span
        style={{
          color: 'white',
          fontSize: 19,
          fontFamily: 'Afacad',
          fontWeight: '400',
          wordWrap: 'break-word',
        }}
      >
        1. Marinate chicken with
        <br />
      </span>
      <span
        style={{
          color: 'white',
          fontSize: 19,
          fontFamily: 'Afacad',
          fontWeight: '400',
          wordWrap: 'break-word',
        }}
      >
        yogurt, salt, and chilies for 1
        <br /> hour.
        <br />
      </span>
      <span
        style={{
          color: 'white',
          fontSize: 19,
          fontFamily: 'Afacad',
          fontWeight: '400',
          wordWrap: 'break-word',
        }}
      >
        2. Cook onions until golden,
        <br />
      </span>
      <span
        style={{
          color: 'white',
          fontSize: 19,
          fontFamily: 'Afacad',
          fontWeight: '400',
          wordWrap: 'break-word',
        }}
      >
        then add chicken and spices; cook until tender.
        <br /> 3. Layer partially cooked rice over chicken, cover, and cook on low for 20 mins.
        <br /> 4. Serve hot with raita.
      </span>
    </div>
    <div
      style={{
        left: 963,
        top: 967,
        position: 'absolute',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Katibeh',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      :
      
    </div>
    <div
      style={{
        left: 797,
        top: 953,
        position: 'absolute',
        color: 'white',
        fontSize: 34.06,
        fontFamily: 'Katibeh',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      Instructions
    </div>
    <div
      style={{
        left: 794,
        top: 1000,
        position: 'absolute',
        color: 'white',
        fontSize: 19.61,
        fontFamily: 'Afacad',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      1. Marinate paneer with yogurt,<br /> tikka masala, and salt for 30 mins.
      <br />
      2. Skewer paneer, bell pepper, and onion.
      <br />
      3. Grill until golden and serve hot with chutney.
    </div>
    <div
      style={{
        left: 124,
        top: 954,
        position: 'absolute',
        color: 'white',
        fontSize: 34.06,
        fontFamily: 'Katibeh',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      Instructions 
    </div>
    <div
      style={{
        left: 797,
        top: 813,
        position: 'absolute',
        color: 'white',
        fontSize: 35.14,
        fontFamily: 'Katibeh',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      Description
    </div>
    <div
      style={{
        width: 264.89,
        left: 965,
        top: 830,
        position: 'absolute',
        color: 'white',
        fontSize: 18.43,
        fontFamily: 'Afacad',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}
    >
      : Spicy and flavorful Paneer <br /> Tikka, grilled to perfection <br /> and served with mint <br /> chutney.
    </div>
    <img
      style={{ width: 474.66, height: 719, left: 668, top: 205, position: 'absolute' }}
      src="images/paneer tikka.png"
    />
  </div>
</div>



<div>
      {/* Your existing homepage content goes here */}

      {/* Add the Footer */}
      <Footer />
    </div>

</div>    
  


  );
};

export default Home;
