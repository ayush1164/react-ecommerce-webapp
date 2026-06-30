import HoneyImg from '../assets/honey_result.jpg'
import HeadPhoneImg from '../assets/headphone_result.jpg'
import MixerImg from '../assets/mixer_result.jpg'
import DigitalWatchImg from '../assets/digital_watch_result.jpg'
import NikeShoesImg from '../assets/adidas_red_shoe_result.jpg'
import femaleDressImg from '../assets/female_dress_result.jpg'
import HarryPorterBooksImg from '../assets/harry_porter_books_result.jpg'
import IndoorPlanImgt from '../assets/indoor_plant_result.jpg'
import LaptopImg from '../assets/laptop_result.jpg'
import LeatherBallImg from '../assets/leather_ball_result.jpg'
import MechanicalKeyboardImg from '../assets/mechanical_keyboard_result.jpg'
import PerfumeImg from '../assets/perfume_result.jpg'
import RiceImg from '../assets/rice_result.jpg'
import RobotToyImg from '../assets/robot_toy_result.jpg'
import IPhone16Img from '../assets/samsung-phone_result.jpg'
import StudyTableImg from '../assets/study_table_result.jpg'
import StusyLampImg from '../assets/study_lamp_result.jpg'
import ToysImg from '../assets/toys_result.jpg'
import TelevisionImg from '../assets/TV_result.jpg'
import YogaMatImg from '../assets/yoga_mat_result.jpg'
import FacewashImg from '../assets/facewash_result.jpg'
import CoockwareSetImg from '../assets/coockware_set_result.jpg'
import MouseImg from '../assets/mouse_result.jpg'
import AirFryerImg from '../assets/air_fryer_result.jpg'
import ProteinPowderImg from '../assets/protein_powder_result.jpg'
import SoundbarImg from '../assets/soundbar_result.jpg'
import SofaImg from '../assets/sofa_result.jpg'
import WallClockImg from '../assets/wall_clock_result.jpg'
import OfficeChairImg from '../assets/office_chair_result.jpg'
import AcImg from '../assets/ac_result.jpg'
import IPhone17Img from '../assets/iphone17_result.jpg'
import JeansImg from '../assets/jeans_result.jpg'
import DenimShirtImg from '../assets/denim_shirt_result.jpg'
import AdidasSneakerImg from '../assets/adidas_red_shoe_result.jpg'
import BooksImg from '../assets/books_result.jpg'

const products = [
    {
        id: 1,
        title: "Samsung 55-inch 4K Smart TV",
        category: "Electronics",
        price: 45999,
        imageUrl: TelevisionImg
    },
    {
        id: 2,
        title: "Apple iPhone 16",
        category: "Mobiles",
        price: 79999,
        imageUrl: IPhone16Img
    },
    {
        id: 3,
        title: "HP Pavilion Laptop",
        category: "Laptops",
        price: 68999,
        imageUrl: LaptopImg
    },
    {
        id: 4,
        title: "Nike Running Shoes",
        category: "Footwear",
        price: 4999,
        imageUrl: NikeShoesImg
    },
    {
        id: 5,
        title: "Men's Cotton Shirt",
        category: "Men Fashion",
        price: 1299,
        imageUrl: DenimShirtImg
    },
    {
        id: 6,
        title: "Women's Floral Dress",
        category: "Women Fashion",
        price: 1899,
        imageUrl: femaleDressImg
    },
    {
        id: 7,
        title: "Non-Stick Cookware Set",
        category: "Kitchen Appliances",
        price: 2999,
        imageUrl: CoockwareSetImg
    },
    {
        id: 8,
        title: "Mixer Grinder",
        category: "Kitchen Appliances",
        price: 3499,
        imageUrl: MixerImg
    },
    {
        id: 9,
        title: "Air Fryer",
        category: "Kitchen Appliances",
        price: 5999,
        imageUrl: AirFryerImg
    },
    {
        id: 10,
        title: "Wooden Wall Clock",
        category: "Home Decor",
        price: 999,
        imageUrl: WallClockImg
    },
    {
        id: 11,
        title: "Decorative Table Lamp",
        category: "Home Decor",
        price: 1499,
        imageUrl: StusyLampImg
    },
    {
        id: 12,
        title: "Artificial Indoor Plant",
        category: "Home Decor",
        price: 799,
        imageUrl: IndoorPlanImgt
    },
    {
        id: 13,
        title: "3-Seater Sofa",
        category: "Furniture",
        price: 24999,
        imageUrl: SofaImg
    },
    {
        id: 14,
        title: "Study Table",
        category: "Furniture",
        price: 5999,
        imageUrl: StudyTableImg
    },
    {
        id: 15,
        title: "Office Chair",
        category: "Furniture",
        price: 6999,
        imageUrl: OfficeChairImg
    },
    {
        id: 16,
        title: "Smart Watch",
        category: "Accessories",
        price: 3999,
        imageUrl: DigitalWatchImg
    },
    {
        id: 17,
        title: "Bluetooth Headphones",
        category: "Accessories",
        price: 2499,
        imageUrl: HeadPhoneImg
    },
    {
        id: 18,
        title: "Gaming Mouse",
        category: "Computer Accessories",
        price: 1299,
        imageUrl: MouseImg
    },
    {
        id: 19,
        title: "Mechanical Keyboard",
        category: "Accessories",
        price: 3499,
        imageUrl: MechanicalKeyboardImg
    },
    {
        id: 20,
        title: "Protein Powder",
        category: "Sports & Fitness",
        price: 2499,
        imageUrl: ProteinPowderImg
    },
    {
        id: 21,
        title: "Yoga Mat",
        category: "Sports & Fitness",
        price: 799,
        imageUrl: YogaMatImg
    },
    {
        id: 22,
        title: "Cricket Ball",
        category: "Sports & Fitness",
        price: 1799,
        imageUrl: LeatherBallImg
    },
    {
        id: 23,
        title: "Face Wash",
        category: "Beauty",
        price: 299,
        imageUrl: FacewashImg
    },
    {
        id: 24,
        title: "Perfume",
        category: "Beauty",
        price: 1499,
        imageUrl: PerfumeImg
    },
    {
        id: 25,
        title: "Rice 5kg",
        category: "Grocery",
        price: 399,
        imageUrl: RiceImg
    },
    {
        id: 26,
        title: "Organic Honey",
        category: "Grocery",
        price: 499,
        imageUrl: HoneyImg
    },
    {
        id: 27,
        title: "Harry Potter Collection",
        category: "Books",
        price: 1999,
        imageUrl: HarryPorterBooksImg
    },
    {
        id: 28,
        title: "React.js Complete Guide",
        category: "Books",
        price: 699,
        imageUrl: BooksImg
    },
    {
        id: 29,
        title: "Remote Control Car",
        category: "Toys",
        price: 1499,
        imageUrl: RobotToyImg
    },
    {
        id: 30,
        title: "Building Blocks Set",
        category: "Toys",
        price: 999,
        imageUrl: ToysImg
    }, {
        id: 31,
        title: "Iphone 17",
        category: "Mobiles",
        price: 82000,
        imageUrl: IPhone17Img
      }, {
        id: 32,
        title: "Adidas Sneakers",
        category: "Footwear",
        price: 4000,
        imageUrl: AdidasSneakerImg
    }, {
        id: 33,
        title: "Denim Shirt",
        category: "Men Fashion",
        price: 1499,
        imageUrl: DenimShirtImg
    }, {
        id: 34,
        title: "Split AC",
        category: "Electronics",
        price: 35000,
        imageUrl: AcImg

    }, {
        id: 35,
        title: "Jeans",
        category: "Women Fashion",
        price: 1100,
        imageUrl: JeansImg
    }, {
        id: 36,
        title: "Boat SoundBar",
        category: "Electronics",
        price: 8500,
        imageUrl: SoundbarImg
    }
];


export default products;




/**
 * for advanced react-project
 * {
  id: 1,
  title: "Product Name",
  category: "Electronics",
  brand: "Samsung",
  price: 45999,
  originalPrice: 52999,
  rating: 4.5,
  reviews: 234,
  stock: 20,
  discount: 15,
  featured: true,
  imageUrl: "image-url"
}
 */