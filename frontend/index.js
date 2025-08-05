// Sample data for brands and cars
const brands = [
    // 1
{
        id: 1,
        name: "Mercedes-Benz",
        description: "German luxury with cutting-edge technology",
        image: "../images/mercedes/mer6.jpg",
        cars: [
            { id: 101, model: "S-Class", year: 2023, price: 115000, image: "../images/mercedes/mer1.jpg", specs: { engine: "V8", horsepower: 496, acceleration: "4.4s" } },
            { id: 102, model: "E-Class", year: 2023, price: 75000, image: "../images/mercedes/mer3.jpg", specs: { engine: "Inline-6", horsepower: 362, acceleration: "5.1s" } },
            { id: 103, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer5.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 104, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer7.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 105, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer8.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 106, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer9.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 107, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer10.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 108, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer11.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 109, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer12.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 110, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/ner4.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 111, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer13.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 112, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer14.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 113, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer15.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 114, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer16.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 115, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer17.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 116, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer19.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 117, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer20.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 118, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer21.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 119, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer18.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 120, model: "GLE", year: 2023, price: 82000, image: "../images/mercedes/mer16.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
        ]
},
// 2
    {
        id: 2,
        name: "BMW",
        description: "Ultimate driving machines with precision engineering",
        image: "../images/bmw/bm6.jpg",
        cars: [
            { id: 201, model: "7 Series", year: 2023, price: 95000, image: "../images/bmw/bm1.jpg", specs: { engine: "V8", horsepower: 523, acceleration: "4.3s" } },
            { id: 202, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm2.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 203, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm3.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 204, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm4.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 205, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm5.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 206, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 207, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 208, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm9.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 209, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm10.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 210, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm11.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 211, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm12.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 212, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm13.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 213, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm14.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 214, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm15.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 215, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm16.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 216, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm17.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 217, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm18.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 218, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm19.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 219, model: "X5", year: 2023, price: 78000, image: "../images/bmw/bm20.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 220, model: "i8", year: 2023, price: 150000, image: "", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
// 3
    {
        id: 3,
        name: "Audi",
        description: "Vorsprung durch Technik - Progress through technology",
        image: "../images/jaguar/jag6.jpg",
        cars: [
            { id: 301, model: "A8", year: 2023, price: 89000, image: "../images/jaguar/jag1.jpg", specs: { engine: "V6", horsepower: 335, acceleration: "5.6s" } },
            { id: 302, model: "Q7", year: 2023, price: 75000, image: "../images/jaguar/jag2.jpg", specs: { engine: "V6", horsepower: 335, acceleration: "5.7s" } },
            { id: 303, model: "R8", year: 2023, price: 180000, image: "../images/jaguar/jag3.jpg", specs: { engine: "V10", horsepower: 562, acceleration: "3.4s" } },
            { id: 304, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag4.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 305, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag5.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 306, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 307, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 308, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag9.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 309, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag10.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 310, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag11.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 311, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 312, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 313, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 314, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 315, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 316, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 317, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 318, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 319, model: "X5", year: 2023, price: 78000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 320, model: "i8", year: 2023, price: 150000, image: "../images/jaguar/jag1.jpg", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
// 4    
    {
        id: 4,
        name: "Porsche",
        description: "Timeless design meets exhilarating performance",
        image: "../images/porche/por1.jpg",
        cars: [
            { id: 401, model: "911 Turbo S", year: 2023, price: 210000, image: "../images/porche/por2.jpg", specs: { engine: "Flat-6", horsepower: 640, acceleration: "2.6s" } },
            { id: 402, model: "Cayenne", year: 2023, price: 85000, image: "../images/porche/por3.jpg", specs: { engine: "V6", horsepower: 335, acceleration: "5.9s" } },
            { id: 403, model: "Taycan", year: 2023, price: 105000, image: "../images/porche/por4.jpg", specs: { engine: "Electric", horsepower: 469, acceleration: "4.8s" } },
            { id: 404, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 405, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 406, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 407, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 408, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 409, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 410, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 411, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 412, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 413, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 414, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 415, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 416, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 417, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 418, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 419, model: "X5", year: 2023, price: 78000, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 420, model: "i8", year: 2023, price: 150000, image: "", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
//5    
    {
        id: 5,
        name: "Tesla",
        description: "Accelerating the world's transition to sustainable energy",
        image: "../images/landmark honda/hon_logo.jpg",
        cars: [
            { id: 501, model: "Model S Plaid", year: 2023, price: 120000, image: "../images/landmark honda/hon1.jpg", specs: { engine: "Electric", horsepower: 1020, acceleration: "1.99s" } },
            { id: 502, model: "Model X", year: 2023, price: 110000, image: "../images/landmark honda/hon2.jpg", specs: { engine: "Electric", horsepower: 670, acceleration: "3.8s" } },
            { id: 503, model: "Cybertruck", year: 2023, price: 70000, image: "../images", specs: { engine: "Electric", horsepower: 800, acceleration: "2.9s" } },
            { id: 504, model: "X5", year: 2023, price: 78000, image: "../images/landmark honda/hon3.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 505, model: "X5", year: 2023, price: 78000, image: "../images/landmark honda/hon4.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 506, model: "X5", year: 2023, price: 78000, image: "../images/landmark honda/hon5.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 507, model: "X5", year: 2023, price: 78000, image: "../images/landmark honda/hon6.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 508, model: "X5", year: 2023, price: 78000, image: "../images/landmark honda/hon7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 509, model: "X5", year: 2023, price: 78000, image: "../images/landmark honda/hon8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 510, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 511, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 512, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 513, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 514, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 515, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 516, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 517, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 518, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 519, model: "X5", year: 2023, price: 78000, image: "../images", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 520, model: "i8", year: 2023, price: 150000, image: "../images", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
//6
    {
        id: 6,
        name: "Jaguar",
        description: "Grace, space, and pace since 1922",
        image: "../images/lamborgini/lam8.jpg",
        cars: [
            { id: 601, model: "F-Type", year: 2023, price: 75000, image: "../images/lamborgini/lam1.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 602, model: "F-Pace", year: 2023, price: 65000, image: "../images/lamborgini/lam2.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 603, model: "XE", year: 2023, price: 50000, image: "../images/lamborgini/lam3.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 604, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam4.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 605, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam5.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 606, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam6.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 607, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 608, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam9.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 609, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam10.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 610, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam11.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 611, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam12.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 612, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam13.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 613, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam14.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 614, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam15.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 615, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam16.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 616, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam17.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 617, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 618, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 619, model: "X5", year: 2023, price: 78000, image: "../images/lamborgini/lam1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 620, model: "i8", year: 2023, price: 150000, image: "../images/lamborgini/lam1.jpg", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
//7
    {
        id: 7,
        name: "Jaguar",
        description: "Grace, space, and pace since 1922",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        cars: [
            { id: 701, model: "F-Type", year: 2023, price: 75000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 702, model: "F-Pace", year: 2023, price: 65000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 703, model: "XE", year: 2023, price: 50000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 704, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 705, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 706, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 707, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 708, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 709, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 710, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 711, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 712, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 713, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 714, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 715, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 716, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 717, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 718, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 719, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 720, model: "i8", year: 2023, price: 150000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
    //8
    {
        id: 8,
        name: "Jaguar",
        description: "Grace, space, and pace since 1922",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        cars: [
            { id: 801, model: "F-Type", year: 2023, price: 75000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 802, model: "F-Pace", year: 2023, price: 65000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 803, model: "XE", year: 2023, price: 50000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 804, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 805, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 806, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 807, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 808, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 809, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 810, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 811, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 812, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 813, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 814, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 815, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 816, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 817, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 818, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 819, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 820, model: "i8", year: 2023, price: 150000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
//9
    {
        id: 9,
        name: "Jaguar",
        description: "Grace, space, and pace since 1922",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        cars: [
            { id: 901, model: "F-Type", year: 2023, price: 75000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 902, model: "F-Pace", year: 2023, price: 65000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 903, model: "XE", year: 2023, price: 50000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 904, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 905, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 906, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 907, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 908, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 909, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 910, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 911, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 912, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 913, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 914, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 915, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 916, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 917, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 918, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 919, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 920, model: "i8", year: 2023, price: 150000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
//10
    {
        id: 10,
        name: "Jaguar",
        description: "Grace, space, and pace since 1922",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        cars: [
            { id: 1001, model: "F-Type", year: 2023, price: 75000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 1002, model: "F-Pace", year: 2023, price: 65000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 1003, model: "XE", year: 2023, price: 50000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 1004, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1005, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1006, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1007, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1008, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1009, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1010, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1011, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1012, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1013, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1014, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1015, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1016, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1017, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1018, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1019, model: "X5", year: 2023, price: 78000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1020, model: "i8", year: 2023, price: 150000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    }
];

// DOM Elements
const brandsGrid = document.getElementById('brandsGrid');
const carsModal = document.getElementById('carsModal');
const modalBrandTitle = document.getElementById('modalBrandTitle');
const carsGrid = document.getElementById('carsGrid');
const closeModal = document.getElementById('closeModal');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const overlay = document.getElementById('overlay');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('nav ul');

// Cart state
let cart = [];

// Initialize the page
function init() {
    renderBrands();
    setupEventListeners();
}

// Render brand cards
function renderBrands() {
    brandsGrid.innerHTML = '';
    brands.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card';
        brandCard.innerHTML = `
                    <img src="${brand.image}" alt="${brand.name}" class="brand-img">
                    <div class="brand-info">
                        <h3>${brand.name}</h3>
                        <p>${brand.description}</p>
                    </div>
                `;
        brandCard.addEventListener('click', () => openBrandModal(brand));
        brandsGrid.appendChild(brandCard);
    });
}

// Open brand modal with cars
function openBrandModal(brand) {
    modalBrandTitle.textContent = `${brand.name} Collection`;
    carsGrid.innerHTML = '';

    brand.cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
                    <img src="${car.image}" alt="${brand.name} ${car.model}" class="car-img">
                    <div class="car-info">
                        <h4>${brand.name} ${car.model}</h4>
                        <div class="car-specs">
                            <span>${car.year}</span>
                            <span>${car.specs.engine}</span>
                            <span>${car.specs.horsepower} HP</span>
                            <span>0-60: ${car.specs.acceleration}</span>
                        </div>
                        <div class="car-price">$${car.price.toLocaleString()}</div>
                        <button class="add-to-cart" data-id="${car.id}" data-brand="${brand.name}" data-model="${car.model}" data-price="${car.price}" data-image="${car.image}">Add to Cart</button>
                    </div>
                `;
        carsGrid.appendChild(carCard);
    });

    const oth_object = document.getElementById('oth_object')
    const oth_car_grid = document.getElementById("oth_car_grid")

    function otherstate(brand) {
        oth_object.textContent = `${brand.name} its main`
        oth_car_grid.innerHTML = ''

        brands.cars.forEach(car => {

        })
    }

    carsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Close brand modal
function closeBrandModal() {
    carsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add item to cart
function addToCart(e) {
    const button = e.target;
    const id = button.getAttribute('data-id');
    const brand = button.getAttribute('data-brand');
    const model = button.getAttribute('data-model');
    const price = parseFloat(button.getAttribute('data-price'));
    const image = button.getAttribute('data-image');

    // Check if item already in cart
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id,
            brand,
            model,
            price,
            image,
            quantity: 1
        });
    }

    updateCart();

    // Visual feedback
    button.textContent = 'Added!';
    button.style.backgroundColor = '#4CAF50';
    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.backgroundColor = '';
    }, 1000);
}

// Update cart UI
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '$0';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.brand} ${item.model}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.brand} ${item.model}</h4>
                        <div>$${item.price.toLocaleString()} x ${item.quantity} = $${itemTotal.toLocaleString()}</div>
                    </div>
                    <button class="remove-item" data-id="${item.id}">&times;</button>
                `;
        cartItems.appendChild(cartItem);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });

    cartTotal.textContent = `$${total.toLocaleString()}`;
}

// Remove item from cart
function removeFromCart(e) {
    const id = e.target.getAttribute('data-id');
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : 'auto';
}

// Toggle mobile menu
function toggleMobileMenu() {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Setup event listeners
function setupEventListeners() {
    closeModal.addEventListener('click', closeBrandModal);
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === carsModal) {
            closeBrandModal();
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
}

// Initialize the page
init();