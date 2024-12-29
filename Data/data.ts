import { AnyNode } from "postcss";
import { PiKeyReturn } from "react-icons/pi";

type Data = {
    id: number;
    image:string;
    title:string;
    description:string;
    price:string;
    stock:string;
    
}

// Makeup Data

export const Foundation = [
    {
    id: 1,
    image:"/foundation1.jpg",
    title: "Liquid Foundation",
    description:"A light perfecting, radiance inducing foundation with traceless coverage. Giving you perfectly flawless skin that lasts all day long. Undetectable and seamless for that everyday lightweight feel. Excellent waterproof, nourish the skin, smooth wrinkles and fine lines , make skin delicate and makeup long-lasting.",
    price: "Rs.1700 PKr",
    stock: "In stock"
    },

    {
        id: 2,
        image:"/foundation2.jpg",
        title: "Liquid Foundation",
        description:"A light perfecting, radiance inducing foundation with traceless coverage. Giving you perfectly flawless skin that lasts all day long. Undetectable and seamless for that everyday lightweight feel. Excellent waterproof, nourish the skin, smooth wrinkles and fine lines , make skin delicate and makeup long-lasting.",
        price: "Rs.1700 PKr",
        stock: "In stock"
     },


     {
        id: 3,
        image:"/foundation3.jpg",
        title: "Liquid Foundation",
        description:"A light perfecting, radiance inducing foundation with traceless coverage. Giving you perfectly flawless skin that lasts all day long. Undetectable and seamless for that everyday lightweight feel. Excellent waterproof, nourish the skin, smooth wrinkles and fine lines , make skin delicate and makeup long-lasting.",
        price: "Rs.1700 PKr",
        stock: "In stock"
     },

     {
        id: 4,
        image:"/foundation4.jpg",
        title: "Liquid Foundation",
        description:"A light perfecting, radiance inducing foundation with traceless coverage. Giving you perfectly flawless skin that lasts all day long. Undetectable and seamless for that everyday lightweight feel. Excellent waterproof, nourish the skin, smooth wrinkles and fine lines , make skin delicate and makeup long-lasting.",
        price: "Rs.1700 PKr",
        stock: "In stock"
     },

];

export const Concealer = [
    {
    id: 5,
    image:"/concealer1.jpg",
    title: "Concealer",
    description:"concealer is designed to cover up imperfections such as dark circles, blemishes, and redness, creating a smoother and more even complexion. This can be beneficial for those who need their makeup to stay in place throughout the day without constant touch-ups. Hydrating concealer  help plump the skin, potentially reducing the visibility of fine lines and wrinkles.",
    price: "Rs.2000 PKr",
    stock: "In stock"
   
    },

    {
        id: 6,
        image:"/concealer2.jpg",
        title: "Concealer",
        description:"concealer is designed to cover up imperfections such as dark circles, blemishes, and redness, creating a smoother and more even complexion. This can be beneficial for those who need their makeup to stay in place throughout the day without constant touch-ups. Hydrating concealer  help plump the skin, potentially reducing the visibility of fine lines and wrinkles.",
        price: "Rs.2000 PKr",
        stock: "In stock"
     },


     {
        id: 7,
        image:"/concealer3.jpg",
        title: "Concealer",
        description:"concealer is designed to cover up imperfections such as dark circles, blemishes, and redness, creating a smoother and more even complexion. This can be beneficial for those who need their makeup to stay in place throughout the day without constant touch-ups. Hydrating concealer  help plump the skin, potentially reducing the visibility of fine lines and wrinkles.",
        price: "Rs.2000 PKr",
        stock: "In stock"
     },

     {
        id: 8,
        image:"/concealer4.jpg",
        title: "Concealer",
        description:"concealer is designed to cover up imperfections such as dark circles, blemishes, and redness, creating a smoother and more even complexion. This can be beneficial for those who need their makeup to stay in place throughout the day without constant touch-ups. Hydrating concealer  help plump the skin, potentially reducing the visibility of fine lines and wrinkles.",
        price: "Rs.2000 PKr",
        stock: "In stock"
     },

];


export const EyeShadow = [
    {
    id: 9,
    image:"/eyeshadow1.jpg",
    title: "Eye Shadow",
    description:"Discover a world of neutral tones that range from subtle mattes to shimmering metallics, allowing you to transition effortlessly from day to night. The Mysterious palette offers a perfect balance of warm and cool shades, enabling you to craft sultry, mysterious eyes that captivate attention.",
    price: "Rs.1700 PKr",
    stock: "In stock"
    },

    {
        id: 10,
        image:"/eyeshadow2.jpg",
        title: "Eye Shadow",
        description:"Discover a world of neutral tones that range from subtle mattes to shimmering metallics, allowing you to transition effortlessly from day to night. The Mysterious palette offers a perfect balance of warm and cool shades, enabling you to craft sultry, mysterious eyes that captivate attention.",
        price: "Rs.1700 PKr",
        stock: "In stock"
     },


     {
        id: 11,
        image:"/eyeshadow3.jpg",
        title: "Eye Shadow",
        description:"Discover a world of neutral tones that range from subtle mattes to shimmering metallics, allowing you to transition effortlessly from day to night. The Mysterious palette offers a perfect balance of warm and cool shades, enabling you to craft sultry, mysterious eyes that captivate attention.",
        price: "Rs.1700 PKr",
        stock: "In stock"
     },

     {
        id: 12,
        image:"/eyeshadow4.jpg",
        title: "Eye Shadow",
        description:"Discover a world of neutral tones that range from subtle mattes to shimmering metallics, allowing you to transition effortlessly from day to night. The Mysterious palette offers a perfect balance of warm and cool shades, enabling you to craft sultry, mysterious eyes that captivate attention.",
        price: "Rs.1700 PKr",
        stock: "In stock"
     },

];


export const EyeLiner = [

    {
        id: 13,
        image:"/eyeliner1.png",
        title: "Eye Liner",
        description:"The Queen s Pen-liquid eye liner facilitates effortless liquid lining, creating a distinctive bold look in one sweep. The long-lasting super black formula can create the thinnest or thickest winged liner, providing striking eyes for every occasion.",
        price: "Rs.1900 PKr",
        stock: "In stock"
     },

     {
        id: 14,
        image:"/eyeliner2.jpg",
        title: "Eye Liner",
        description:"The Queen s Pen-liquid eye liner facilitates effortless liquid lining, creating a distinctive bold look in one sweep. The long-lasting super black formula can create the thinnest or thickest winged liner, providing striking eyes for every occasion.",
        price: "Rs.1900 PKr",
        stock: "In stock"
     },


     {
        id: 15,
        image:"/eyeliner3.jpg",
        title: "Eye Liner",
        description:"The Queen s Pen-liquid eye liner facilitates effortless liquid lining, creating a distinctive bold look in one sweep. The long-lasting super black formula can create the thinnest or thickest winged liner, providing striking eyes for every occasion.",
        price: "Rs.1900 PKr",
        stock: "In stock"
     },

     {
        id: 16,
        image:"/eyeliner4.png",
        title: "Eye Liner",
        description:"The Queen s Pen-liquid eye liner facilitates effortless liquid lining, creating a distinctive bold look in one sweep. The long-lasting super black formula can create the thinnest or thickest winged liner, providing striking eyes for every occasion.",
        price: "Rs.1900 PKr",
        stock: "In stock"
     },


];


export const Blusher = [
    {
        id: 17,
        image:"/blusher1.jpg",
        title: "Blusher",
        description:"This is perfect if you're looking for a vibrant, fresh-faced look. Seasonally, blush can add a rosy glow during fall and winter, and it can also play beautifully in spring. Bronzer is great for creating a sun-kissed glow",
        price: "Rs.2500 PKr",
        stock: "In stock"  
    },

    {
        id: 18,
        image:"/blusher2.jpg",
        title: "Blusher",
        description:"This is perfect if you're looking for a vibrant, fresh-faced look. Seasonally, blush can add a rosy glow during fall and winter, and it can also play beautifully in spring. Bronzer is great for creating a sun-kissed glow",
        price: "Rs.2500 PKr",
        stock: "In stock"  
    },

    {
        id: 19,
        image:"/blusher3.jpg",
        title: "Blusher",
        description:"This is perfect if you're looking for a vibrant, fresh-faced look. Seasonally, blush can add a rosy glow during fall and winter, and it can also play beautifully in spring. Bronzer is great for creating a sun-kissed glow",
        price: "Rs.2500 PKr",
        stock: "In stock"  
    },

    {
        id: 20,
        image:"/blusher4.jpg",
        title: "Blusher",
        description:"This is perfect if you're looking for a vibrant, fresh-faced look. Seasonally, blush can add a rosy glow during fall and winter, and it can also play beautifully in spring. Bronzer is great for creating a sun-kissed glow",
        price: "Rs.2500 PKr",
        stock: "In stock"  
    },
]

export const Highlighter = [
    {
        id: 21,
        image:"/highlighter1.jpg",
        title: "Highlighter",
        description:"Highlighter makeup is a cosmetic product designed to accentuate certain features of the face by adding a luminous, glowing effect. It enhances the natural contours of the face, providing a radiant and youthful look by reflecting light off the skin. Highlighter is a staple in many makeup routines, particularly in achieving a dewy or sculpted appearance.",
        price: "Rs.2500 PKr",
        stock: "In stock"  

    },

    {
        id: 22,
        image:"/highlighter2.jpg",
        title: "Highlighter",
        description:"Highlighter makeup is a cosmetic product designed to accentuate certain features of the face by adding a luminous, glowing effect. It enhances the natural contours of the face, providing a radiant and youthful look by reflecting light off the skin. Highlighter is a staple in many makeup routines, particularly in achieving a dewy or sculpted appearance.",
        price: "Rs.2500 PKr",
        stock: "In stock"  

    },

    {
        id: 23,
        image:"/highlighter3.jpg",
        title: "Highlighter",
        description:"Highlighter makeup is a cosmetic product designed to accentuate certain features of the face by adding a luminous, glowing effect. It enhances the natural contours of the face, providing a radiant and youthful look by reflecting light off the skin. Highlighter is a staple in many makeup routines, particularly in achieving a dewy or sculpted appearance.",
        price: "Rs.2500 PKr",
        stock: "In stock"  

    },

    {
        id: 24,
        image:"/highligher4.jpg",
        title: "Highlighter",
        description:"Highlighter makeup is a cosmetic product designed to accentuate certain features of the face by adding a luminous, glowing effect. It enhances the natural contours of the face, providing a radiant and youthful look by reflecting light off the skin. Highlighter is a staple in many makeup routines, particularly in achieving a dewy or sculpted appearance.",
        price: "Rs.2500 PKr",
        stock: "In stock"  

    },
];

export const contour = [

    {
        id: 25,
        image:"/contour1.jpg",
        title: "Contour",
        description:"Contour makeup is a technique used to define, sculpt, and enhance the natural structure of the face by using darker and lighter shades of makeup. The darker shades create shadows to recede areas, while lighter shades (often highlighter) bring attention to specific features. This technique is popular for achieving a more chiseled and polished look.",
        price: "Rs.2500 PKr",
        stock: "In stock"  

    },

    {
        id: 26,
        image:"/contour2.jpg",
        title: "Contour",
        description:"Contour makeup is a technique used to define, sculpt, and enhance the natural structure of the face by using darker and lighter shades of makeup. The darker shades create shadows to recede areas, while lighter shades (often highlighter) bring attention to specific features. This technique is popular for achieving a more chiseled and polished look.",
        price: "Rs.2500 PKr",
        stock: "In stock"  

    },

];

export const Lipstick =[

    {
        id: 27,
        image:"/lipstick1.jpg",
        title: "Matte Lipstick",
        description:"Lipstick is a popular cosmetic product applied to the lips to add color, texture, and protection. It is a versatile beauty essential that can enhance facial features, express personal style, and complete a makeup look. Lipsticks are available in a variety of finishes, shades, and formulations to suit different occasions, preferences, and skin tones.",
        price: "Rs.1000 PKr",
        stock: "In stock"  

    },

    {
        id: 28,
        image:"/lipstick2.jpg",
        title: "Matte Lipstick",
        description:"Lipstick is a popular cosmetic product applied to the lips to add color, texture, and protection. It is a versatile beauty essential that can enhance facial features, express personal style, and complete a makeup look. Lipsticks are available in a variety of finishes, shades, and formulations to suit different occasions, preferences, and skin tones.",
        price: "Rs.1000 PKr",
        stock: "In stock"  

    },

    {
        id: 29,
        image:"/lipstick3.jpg",
        title: "Matte Lipstick",
        description:"Lipstick is a popular cosmetic product applied to the lips to add color, texture, and protection. It is a versatile beauty essential that can enhance facial features, express personal style, and complete a makeup look. Lipsticks are available in a variety of finishes, shades, and formulations to suit different occasions, preferences, and skin tones.",
        price: "Rs.1000 PKr",
        stock: "In stock"  

    },

    {
        id: 30,
        image:"/lipstick4.jpg",
        title: "Matte Lipstick",
        description:"Lipstick is a popular cosmetic product applied to the lips to add color, texture, and protection. It is a versatile beauty essential that can enhance facial features, express personal style, and complete a makeup look. Lipsticks are available in a variety of finishes, shades, and formulations to suit different occasions, preferences, and skin tones",
        price: "Rs.1000 PKr",
        stock: "In stock"  

    },
];

export const LipGloss =[
    {
        id: 31,
        image:"/lipgloss1.jpg",
        title: "Lip Gloss",
        description:"Lip gloss is a cosmetic product designed to give lips a shiny, glossy finish while sometimes adding a hint of color. It is lightweight and versatile, often used for a natural, fresh look or layered over lipstick to enhance its vibrancy and dimension. Lip gloss can also provide hydration and a plumping effect, making it a popular choice for various occasions.",
        price: "Rs.1000 PKr",
        stock: "In stock"  

    },


    {
        id: 32,
        image:"/lipgloss2.jpg",
        title: "Lip Gloss",
        description:"Lip gloss is a cosmetic product designed to give lips a shiny, glossy finish while sometimes adding a hint of color. It is lightweight and versatile, often used for a natural, fresh look or layered over lipstick to enhance its vibrancy and dimension. Lip gloss can also provide hydration and a plumping effect, making it a popular choice for various occasions.",
        price: "Rs.1000 PKr",
        stock: "In stock"  

    },

    {
        id: 33,
        image:"/lipgloss3.jpg",
        title: "Lip Gloss",
        description:"Lip gloss is a cosmetic product designed to give lips a shiny, glossy finish while sometimes adding a hint of color. It is lightweight and versatile, often used for a natural, fresh look or layered over lipstick to enhance its vibrancy and dimension. Lip gloss can also provide hydration and a plumping effect, making it a popular choice for various occasions.",
        price: "Rs.1000 PKr",
        stock: "In stock"  

    },

    {
        id: 34,
        image:"/lipgloss4.jpg",
        title: "Lip Gloss",
        description:"Lip gloss is a cosmetic product designed to give lips a shiny, glossy finish while sometimes adding a hint of color. It is lightweight and versatile, often used for a natural, fresh look or layered over lipstick to enhance its vibrancy and dimension. Lip gloss can also provide hydration and a plumping effect, making it a popular choice for various occasions.",
        price: "Rs.1000 PKr",
        stock: "In stock"  

    },

];






