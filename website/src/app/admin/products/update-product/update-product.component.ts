import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../../services/admin-service.service';


export interface BrandGroups {
  letter: string;
  brands: string[];
}

export interface DepartmentGroups {
  sector: string;
  quadrant: string[];
}
interface Department {
  area: string;
}
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  form: any = {};
  isRegistered = false;
  isRegisteredFailed = false;
  errorMessage = '';
  selected = ``;
  departmentA = ``;
  departmentB = ``;
  departmentC = ``;
  productTagForm4 = ``;
  productTagForm5 = ``;
  productTagForm6 = ``;
  productTagForm7 = ``;
  productTagForm8 = ``;
  productTagForm9 = ``;
  productTagForm10 = ``;
  productTagForm11 = ``;
  productTagForm12 = ``;
  productTagForm13 = ``;
  productTagForm14 = ``;
  productTagForm15 = ``;
  productTags: string[];
  productQuantityForm: number
  productPriceForm: number;
  finalTag1: any;
  finalTag2: any;
  finalTag3: any;
  finalTag4: any;
  finalTag5: any;
  finalTag6: any;
  finalTag7: any;
  finalTag8: any;
  finalTag9: any;
  finalTag10: any;
  finalTag11: any;
  finalTag12: any;
  i: number;
  message: string;
  displayMessage: boolean;
  brandGroups: BrandGroups[] = [
    {
      letter: `A`,
      brands: [
        `A&K`,
        `Aavara`,
        `Absolute Maternity`,
        `ACCELERA`,
        `ACCUD`,
        `Acer`,
        `Adam Elements`,
        `ADATA`,
        `Addis`,
        `adidas`,
        `Admiral`,
        `Africology`,
        `Agrinet`,
        `Aircraft`,
        `Airwalk`,
        `Alcolin`,
        `Alice Umbrellas`,
        `Alpen`,
        `Altitude`,
        `American Crafts`,
        `Amplify`,
        `Ampro`,
        `Apadana`,
        `Apple`,
        `Argus Motoring`,
        `Art Jewellers`,
        `ASICS`,
        `Astrum`,
        `ASUS`,
        `Athleisure by Discovery`,
        `Audi`
      ]
    },
    {
      letter: `B`,
      brands: [
        `Baby Headbands`,
        `Bad Girl`,
        `Bags Direct`,
        `Bantex`,
        `Baobab`,
        `Barbie`,
        `Baseus`,
        `Basics`,
        `Beau Diva`,
        `Bedight Wall Art `,
        `Beeztees`,
        `Behringer`,
        `Beleduc`,
        `Berlinger Haus`,
        `Bessey`,
        `Best Brand`,
        `Bestway`,
        `Beta`,
        `Beurer`,
        `Bic`,
        `Black & Decker`,
        `Blackcherry`,
        `Blaumann`,
        `BLKT`,
        `blomus`,
        `BMC Air Filter`,
        `Body Glove`,
        `Bootbag`,
        `Bosch`,
        `Brabantia`,
        `Brad Scott`,
        `BrainBox`,
        `Bridgestone`,
        `Bright Star Lighting`,
        `Brother`,
        `BTSN Design`,
        `Bunty`,
        `Butterfly`,
        `BuyAbility`,
        `BYS`
      ]
    },
    {
      letter: `C`,
      brands: [
        `Cabinet Shop`,
        `Cadac`,
        `Caffeluxe`,
        `Camp Cover`,
        `Campground`,
        `Canon`,
        `Capdase`,
        `CAR SHADES`,
        `Carpet City Factory Shop`,
        `Carrera`,
        `Carrol Boyes`,
        `Casio`,
        `Catrice`,
        `Cellini`,
        `CellTime`,
        `Character`,
        `Charmza`,
        `chicco`,
        `Christian Art Gifts`,
        `Cielo`,
        `Cisa`,
        `Citizen`,
        `Civetta Spark`,
        `Classic World`,
        `Clinique`,
        `Closet London`,
        `Cloud Stomper (Pty)Ltd `,
        `Cobble Hill Puzzle Company`,
        `Converse`,
        `Cooler Master`,
        `Corsair`,
        `Cottonbox`,
        `Couture Creations`,
        `Creatives`,
        `Crocs`,
        `Croshka Designs`,
        `Croxley`,
        `CSixx`
      ]
    },
    {
      letter: `D`,
      brands: [
        `D'Addario`,
        `D-Link`,
        `Daler Rowney`,
        `DC Comics `,
        `Decor Depot`,
        `Definitive Water`,
        `Defy`,
        `Dell`,
        `Derwent`,
        `Designed for Fitness`,
        `Destiny`,
        `DHAO`,
        `Dhia Jewellery`,
        `Digital World`,
        `Digitime`,
        `Digitronics`,
        `Disney`,
        `Disney Frozen`,
        `Djeco`,
        `DJI`,
        `Docrafts`,
        `DOE`,
        `Dog's Life`,
        `Donaldson`,
        `Douglas`,
        `Dr.Organic`,
        `DREMEL`,
        `DSA`,
        `Dux`
      ]
    },
    {
      letter: `E`,
      brands: [
        `EasyCover`,
        `Eboy Steel`,
        `Eco`,
        `EDX Education`,
        `eeBoo`,
        `Eetrite`,
        `EHK`,
        `Energizer`,
        `Epson`,
        `essence`,
        `Essentials`,
        `Estee Lauder`,
        `Euro Brass`,
        `Eurolux`
      ]
    },
    {
      letter: `F`,
      brands: [
        `Faber-Castell`,
        `Fantastick`,
        `Fellowes`,
        `Felo`,
        `Ferplast`,
        `Ferrari`,
        `Festool`,
        `Fine Living`,
        `Fino`,
        `Firetrap`,
        `Fitflop`,
        `Fixman Tools`,
        `Focallure Cosmetics`,
        `Forge Turbo`,
        `Fossil`,
        `Fragram`,
        `Fram`,
        `FunBC`,
        `Funko`,
        `Funko Pop`
      ]
    },
    {
      letter: `G`,
      brands: [
        `Galt`,
        `Garmin`,
        `Garnier`,
        `Gates`,
        `GAV`,
        `Generic`,
        `George & Mason`,
        `George Uniform`,
        `GetUp`,
        `Giotto`,
        `Glamore Cosmetics`,
        `Golddigga`,
        `Golden`,
        `GoPro`,
        `Greenbean`,
        `Gretmol`,
        `Guess`
      ]
    },
    {
      letter: `H`,
      brands: [
        `Hape`,
        `Harrows`,
        `Harry Potter`,
        `HellermannTyton`,
        `Helly Hansen`,
        `Henzo`,
        `Hey Casey!`,
        `Hikvision`,
        `Hisense`,
        `Hoco`,
        `Hot Tuna`,
        `Hoya`,
        `HP`,
        `Huawei`,
        `Huda Beauty`,
        `Hybrid`
      ]
    },
    {
      letter: `I`,
      brands: [
        `I Saw it First`,
        `i-Spa`,
        `Ibili`,
        `Iconix`,
        `Ideal Toy`,
        `iDesire`,
        `Illuminate Creations`,
        `Inksaver`,
        `Intel`,
        `Intelli-Vision Technology`,
        `Intex`
      ]
    },
    {
      letter: `J`,
      brands: [
        `Jack & Jones`,
        `Jada`,
        `Jamie Oliver`,
        `JBL`,
        `Jeronimo`,
        `Jewellers Florist`,
        `Jonnesway`,
        `Joseph Joseph`,
        `JuiceBubble`,
        `JVC`
      ]
    },
    {
      letter: `K`,
      brands: [
        `KaiserCraft`,
        `Kalabazoo`,
        `Kangol`,
        `Kaufmann`,
        `Kellermann Swords`,
        `Kenda`,
        `Kennedy`,
        `Kensington`,
        `King Tony`,
        `Kingston`,
        `Kitchen Inspire`,
        `KitchenAid`,
        `Klammeraffe`,
        `Kneipp`,
        `Koh-i-noor`,
        `Kookaburra`,
        `Kreg`,
        `KurganKenani`
      ]
    },
    {
      letter: `L`,
      brands: [
        `L.O.V Cosmetics`,
        `LA Gear`,
        `LAMY`,
        `Landsail`,
        `LASHER`,
        `Lawn Star`,
        `LDNIO`,
        `Le Creuset`,
        `Learning Resources`,
        `LEGO`,
        `Leisure-Quip`,
        `Lenovo`,
        `Leonardo`,
        `Leroy Merlin`,
        `Les Deglingos`,
        `Lexmark`,
        `LG`,
        `Lily & Rose`,
        `Lindy`,
        `Linen Boutique`,
        `Linzi`,
        `LK's `,
        `Lock & Lock `,
        `Logitech`,
        `Lola Lee`,
        `Lonsdale`,
        `Loreal`,
        `Lotto`,
        `Luigi Bormioli`,
        `Lush Living`
      ]
    },
    {
      letter: `M`,
      brands: [
        `Macally`,
        `Major Tech`,
        `Makita`,
        `Manfrotto`,
        `Marathon Tools`,
        `Marco`,
        `Marlin`,
        `Marvel`,
        `Matlock`,
        `Mattel`,
        `Maxwell & Williams`,
        `Maybelline NY`,
        `Mean Well`,
        `Medal Hanger Specialists - DC Designers`,
        `Medalist`,
        `Meeco`,
        `Megamaster`,
        `Melissa & Doug`,
        `Mellerware`,
        `Microsoft`,
        `Miso`,
        `Miss Jewels`,
        `Miss Lyn`,
        `Mix Box`,
        `Moleskine`,
        `Morgan Taylor`,
        `Moshi`,
        `Moto-Quip`,
        `Mpet`,
        `MTS`,
        `Muddyyfox`,
        `MugNolia`,
        `Munchkin`,
        `Mustad`
      ]
    },
    {
      letter: `N`,
      brands: [
        `Nanacoco`,
        `National Geographic`,
        `Naturehike`,
        `New Balance`,
        `New York Puzzle Company `,
        `NeXtime`,
        `NGK`,
        `Nike`,
        `Nikon`,
        `NIVEA`,
        `Noveltees ZA`,
        `NOW Foods`,
        `NPL`,
        `NUK`,
        `Nutritech`
      ]
    },
    {
      letter: `O`,
      brands: [
        `Oakley`,
        `OEM`,
        `Ofra Cosmetics`,
        `Olfa`,
        `Olive Tree`,
        `On Stage`,
        `OPI`,
        `optic life`,
        `Orico`,
        `OTC Shop`,
        `Our Generation`,
        `Ovation`,
        `Oxford`,
        `OZtrail`
      ]
    },
    {
      letter: `P`,
      brands: [
        `Pamper Hamper`,
        `Parker`,
        `Parrot Products`,
        `Patio Solution Covers`,
        `Paw Patrol`,
        `Pentel`,
        `PG Mini`,
        `Philips`,
        `Picard`,
        `Pierre Cardin`,
        `Pilot`,
        `Play Go`,
        `Playmobil`,
        `Port Designs`,
        `Power Bubble`,
        `PowerUp`,
        `Prive Revaux`,
        `ProTaper`,
        `Pudaier`,
        `Puig`,
        `Puma`,
        `Pyrex`
      ]
    },
    {
      letter: `Q`,
      brands: [
        `Q&Q`,
        `Qtees Africa`,
        `Qualatex`,
        `Quality Persian Rugs`,
        `Quiz`
      ]
    },
    {
      letter: `R`,
      brands: [
        `Race Chip`,
        `Radar Tyres`,
        `Rawlplug`,
        `Ray-Ban`,
        `Raz Tech`,
        `Red Mountain`,
        `Redragon`,
        `Reebok`,
        `Regent`,
        `Remax`,
        `Revlon`,
        `Rexel`,
        `RGS Group`,
        `Rhyno`,
        `Robotime`,
        `Roesle`,
        `Rogz`,
        `Rolfes`,
        `Royalty Line`,
        `Rugs Original`,
        `Russell Hobbs`,
        `Ryobi`
      ]
    },
    {
      letter: `S`,
      brands: [
        `S-Cape`,
        `Samson`,
        `Samsonite`,
        `Samsung`,
        `SanDisk`,
        `SBS`,
        `Scanpan`,
        `Scratzme`,
        `Seagate`,
        `Seedleme`,
        `Senator`,
        `Sennheiser`,
        `Silverbird`,
        `SIXTEEN10`,
        `SKA`,
        `Skagen`,
        `skechers`,
        `Skin nit`,
        `Skone`,
        `Slazenger`,
        `Sluban`,
        `Smashbox`,
        `Smeg`,
        `Smok`,
        `Sondico`,
        `Sony`,
        `Soulcal`,
        `Soviet`,
        `Speck`,
        `Spigen`,
        `Stabilo`,
        `Staedtler`,
        `Stanley Tools`,
        `Star Wars`,
        `Stephen Joseph`,
        `Superfly`,
        `Swarovski`,
        `SweetFit`,
        `Sylvanian Families`
      ]
    },
    {
      letter: `T`,
      brands: [
        `Talullah Suede`,
        `Targus`,
        `Tassels`,
        `Taurus`,
        `Teachers First Choice`,
        `Tech21`,
        `Tekron`,
        `Tellur`,
        `Tescoma`,
        `The Earth Collection`,
        `The Gem Seller`,
        `The Goth Spot`,
        `The Lighting Warehouse`,
        `The North Face`,
        `TheGoodSport`,
        `Thermaltake`,
        `Thor`,
        `Tilevera`,
        `Tognana`,
        `Tommee Tippee`,
        `Top Trumps`,
        `Topline`,
        `Tork Craft`,
        `Torrenti`,
        `Toshiba`,
        `Tower`,
        `TP-Link`,
        `Transcend`,
        `Treeline`,
        `Tribe`,
        `Trodat`,
        `Troika`,
        `Trollbeads`,
        `Trudi`,
        `Tsukineko`,
        `Tuff-Luv`
      ]
    },
    {
      letter: `U`,
      brands: [
        `UAG`,
        `Ubiquiti`,
        `UGreen`,
        `Ultra Link`,
        `Unbranded`,
        `Under Armour`,
        `Unitek`,
        `Urban Charm`,
        `USN`
      ]
    },
    {
      letter: `V`,
      brands: [
        `Victorinox`,
        `Viga`,
        `Vinyl Lady Decals`,
        `Vitalsox`,
        `Volkano`,
        `Volkswagen`,
        `VR`
      ]
    },
    {
      letter: `W`,
      brands: [
        `Wagworld`,
        `Weber`,
        `Western Digital`,
        `Why`,
        `Wiggle`,
        `Wildberry`,
        `Wonder Towel`,
        `WripWraps`
      ]
    },
    { letter: `X`, brands: [`X-Appeal`, `X-kit Achieve`, `X-One`, `Xbox`] },
    {
      letter: `Y`,
      brands: [
        `Yale`,
        `Yamoto`,
        `Yardley`,
        `Yato`,
        `Yes!`,
        `York`,
        `Young Pioneer`
      ]
    },
    { letter: `Z`, brands: [`Zippo`] }
  ];
  departments: Department[] = [
    { area: "Appliances" },
    { area: "Babys" },
    { area: "Beauty" },
    { area: "Books" },
    { area: "Camping" },
    { area: "Car & Motorbike" },
    { area: "Cellphone & Tablets" },
    { area: "Courses" },
    { area: "DIY" },
    { area: "Electronics & Computers" },
    { area: "Fashion & Accessories" },
    { area: "Gaming" },
    { area: "Garden" },
    { area: "Health" },
    { area: "Home" },
    { area: "Individual Sports" },
    { area: "Instruments" },
    { area: "Kids" },
    { area: "Liquor & Groceries" },
    { area: "Luggage" },
    { area: "Luxury Beauty" },
    { area: "Movies" },
    { area: "Music" },
    { area: "Office & Stationery" },
    { area: "Pets" },
    { area: "Sport" },
    { area: "Team Sports" },
    { area: "Toys" },
    { area: `ASUS` }
  ];

  departmentGroups: DepartmentGroups[] = [
    {
      sector: `Appliances`,
      quadrant: [`Small`, `Large`, `Home`]
    },
    {
      sector: `Babys`,
      quadrant: [
        `Baby Care`,
        `Changing`,
        `Feeding`,
        `Nursery`,
        `Play`,
        `Travel`
      ]
    },
    {
      sector: `Beauty`,
      quadrant: [`Fragrances`, `Hair Care`, `Makeup`, `Skin Care`]
    },
    {
      sector: `Books`,
      quadrant: [
        `Childrens Books`,
        `Christian Books`,
        `Cookbooks`,
        `E-books`,
        `Fiction`,
        `Inspired Reading`,
        `Non Fiction`
      ]
    },
    {
      sector: `Camping`,
      quadrant: [
        `Binoculars & Scopes`,
        `Camping Furniture`,
        `Coolers & Refrigeration`,
        `Fishing & Outdoor Activities`,
        `Tents & Shelters`
      ]
    },
    {
      sector: `Car & Motorbike`,
      quadrant: [
        `Automotive`,
        `Car Care & Cleaning`,
        `Engine Parts`,
        `Gps & Satnav Devices`,
        `Motorcycle Accessories`,
        `Tyres & Accessories`
      ]
    },
    {
      sector: `Cellphone & Tablets`,
      quadrant: [
        `Airtime & Data`,
        `Cellphone`,
        `Cellular Accessories`,
        `Power Banks`,
        `Tablets & Kindles`
      ]
    },
    {
      sector: `Courses`,
      quadrant: [`Online Courses`, `School Books`, `Tertiary Education`]
    },
    {
      sector: `Electronics & Computers`,
      quadrant: [
        `Action Cams & Drones`,
        `Audio & Video`,
        `Computer Accessories`,
        `Computer Components`,
        `Laptop Accessories`,
        `Laptops`,
        `Monitors`,
        `Networking`,
        `Photography`,
        `Portable Audio`,
        `Printing`,
        `Software`,
        `Storage Devices`,
        `TV`,
        `TV's`,
        `Wearable Tech`
      ]
    },
    {
      sector: `Fashion & Accessories`,
      quadrant: [
        `Accessories`,
        `Footwear`,
        `Kids`,
        `Men`,
        `Wallets & Handbags`,
        `Woman`
      ]
    },
    {
      sector: `Gaming`,
      quadrant: [
        `Gaming Merchandise`,
        `Nintendo`,
        `PC Gaming`,
        `Playsation`,
        `Xbox`
      ]
    },
    {
      sector: `Garden`,
      quadrant: [`Braai`, `Garden`, `Patio`, `Pool`]
    },
    {
      sector: `Health `,
      quadrant: [
        `Health`,
        `Medicine & Treatments`,
        `Personal Care`,
        `Sports Nutrition`,
        `The Wellness Store`
      ]
    },
    {
      sector: `Home`,
      quadrant: [
        ` Bed & Bath`,
        `Dining & Entertaining`,
        `Furniture & Decor`,
        `Kitchen`
      ]
    },
    {
      sector: `Individual Sports`,
      quadrant: [`Gold`, `Swimming`, `Tennis`]
    },
    {
      sector: `Instruments`,
      quadrant: [`Drums & Percussion`, `Guitars`, `Keyboards & Piano`]
    },
    {
      sector: `Kids`,
      quadrant: [`Kids`]
    },
    {
      sector: `Liquor & Groceries`,
      quadrant: [
        `Baby Food & Snacks`,
        `Coffee`,
        `Household & Food`,
        `Liquor`,
        `Pet Food & Treats`,
        `Soft Drinks`,
        `Sport Nutrition`
      ]
    },
    {
      sector: `Luggage`,
      quadrant: [
        `Backpacks & Duffles`,
        `Business Bags`,
        `Handbags & Wallets`,
        `Suitcases`,
        `Travel Accessories`
      ]
    },
    {
      sector: `Luxury Beauty`,
      quadrant: [`Fragrances`, `Makeup`, `Skin Care`]
    },
    {
      sector: `Movies`,
      quadrant: [`Movie Merchandise`, `TV Series`]
    },
    {
      sector: `Music`,
      quadrant: [`CD's & Vinyls`, `DJ & Production`, `Music Merchandise`]
    },
    {
      sector: `Office & Stationery`,
      quadrant: [
        `Office & Stationery`,
        `Home & Office Electronics`,
        `Printers & Ink`,
        `Office Furniture`,
        `Arts & Crafts`,
        `Stationary Supplies`,
        `Small & Medium Enterprises`
      ]
    },
    {
      sector: `Pets`,
      quadrant: [`Birds`, `Cats`, `Dogs`, `Fish`, `Pets`, `Small Pets`]
    },
    {
      sector: `Sport`,
      quadrant: [
        `Cycling`,
        `Fitness`,
        `Running`,
        `Sport Shoes`,
        `Sports Nutrition`,
        `Sport Technology`
      ]
    },
    {
      sector: `Team Sports`,
      quadrant: [`Cricket`, `Hockey`, `Rugby`, `Soccer`]
    },
    {
      sector: `Toys`,
      quadrant: [
        `Action Figures`,
        `Age`,
        `Board Games`,
        `Dolls`,
        `Outdoor Toys`
      ]
    }
  ];

  productID: number;
  p: Product

  constructor(private a: ActivatedRoute, private r: Router, private s: AdminServiceService) { }

  ngOnInit(): void {
    this.p = new Product();
    this.productID = this.a.snapshot.params[`productID`];

    this.s.getProduct(this.productID).subscribe(data => {
      console.log(data)
      this.p = data;
    }, error => console.log(error));
  }
  updateProduct() {
    this.s.updateProduct(this.productID, this.p)
      .subscribe(data => console.log(data), error => console.log(error));
    this.p = new Product();
    this.gotoList();
  }

  onSubmit() {
    this.updateProduct();
  }

  gotoList() {
    this.r.navigate(['admin/product/list']);
  }
}
