import 'dotenv/config.js';
import '../../config/database.js';
import City from '../../models/City.js'

const citiesData = [
    {
        "_id": "64e2a5d4e6610505c2a78cf0",
        "imageUrl": "https://images.pexels.com/photos/17498727/pexels-photo-17498727/free-photo-of-punto-de-referencia-turismo-turquia-pavo.jpeg?auto=compress&cs=tinysrgb&&w=600",
        "title": "Turkey",
        "location": "Fairy tale castle, Eskisehir",
        "briefDescription": "Eskisehir, known for its fairy tale castle, is a charming city in Turkey.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.526Z",
        "updatedAt": "2023-08-20T23:46:28.526Z",
        "itineraries": [
            {
                "name": "Historical Sites Tour",
                "activities": [
                    {
                        "name": "Eskisehir Castle",
                        "duration": "2 hours",
                        "price": "$10",
                        "likes": 15,
                        "tags": [
                            "history",
                            "sightseeing"
                        ]
                    },
                    {
                        "name": "Archaeological Museum",
                        "duration": "1.5 hours",
                        "price": "$8",
                        "likes": 10,
                        "tags": [
                            "history",
                            "culture"
                        ]
                    }
                ]
            },
            {
                "name": "Nature Adventure",
                "activities": [
                    {
                        "name": "Parks and Gardens Walk",
                        "duration": "2.5 hours",
                        "price": "$5",
                        "likes": 8,
                        "tags": [
                            "nature",
                            "outdoors"
                        ]
                    },
                    {
                        "name": "Boat Ride on Porsuk River",
                        "duration": "3 hours",
                        "price": "$12",
                        "likes": 20,
                        "tags": [
                            "nature",
                            "adventure"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cf1",
        "imageUrl": "https://images.pexels.com/photos/17500031/pexels-photo-17500031/free-photo-of-paisaje-montanas-verano-lago.jpeg?auto=compress&cs=tinysrgb&&w=600",
        "title": "Austria",
        "location": "Lünersee Lake, Austrian Alps",
        "briefDescription": "Lünersee Lake, nestled in the Austrian Alps, offers breathtaking views.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Alpine Adventure",
                "activities": [
                    {
                        "name": "Hiking in the Austrian Alps",
                        "duration": "5 hours",
                        "price": "$15",
                        "likes": 25,
                        "tags": [
                            "nature",
                            "adventure"
                        ]
                    },
                    {
                        "name": "Scenic Cable Car Ride",
                        "duration": "2 hours",
                        "price": "$20",
                        "likes": 18,
                        "tags": [
                            "sightseeing",
                            "adventure"
                        ]
                    }
                ]
            },
            {
                "name": "Cultural Exploration",
                "activities": [
                    {
                        "name": "Visit to Schönbrunn Palace",
                        "duration": "3 hours",
                        "price": "$12",
                        "likes": 30,
                        "tags": [
                            "history",
                            "culture"
                        ]
                    },
                    {
                        "name": "Vienna Opera House Tour",
                        "duration": "2.5 hours",
                        "price": "$25",
                        "likes": 22,
                        "tags": [
                            "culture",
                            "entertainment"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cf2",
        "imageUrl": "https://images.pexels.com/photos/4161812/pexels-photo-4161812.jpeg?auto=compress&cs=tinysrgb&&w=600",
        "title": "Argentina",
        "location": "Humahuaca Ravine, Jujuy",
        "briefDescription": "Jujuy's Humahuaca Ravine is a natural wonder in Argentina.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Cultural and Nature Experience",
                "activities": [
                    {
                        "name": "Visit to Humahuaca Ravine",
                        "duration": "4 hours",
                        "price": "$10",
                        "likes": 12,
                        "tags": [
                            "nature",
                            "culture"
                        ]
                    },
                    {
                        "name": "Local Artisan Market",
                        "duration": "2 hours",
                        "price": "$5",
                        "likes": 8,
                        "tags": [
                            "culture",
                            "shopping"
                        ]
                    }
                ]
            },
            {
                "name": "Adventure Trek",
                "activities": [
                    {
                        "name": "Mountain Trek to Abra Pampa",
                        "duration": "6 hours",
                        "price": "$15",
                        "likes": 20,
                        "tags": [
                            "nature",
                            "adventure"
                        ]
                    },
                    {
                        "name": "River Rafting in Rio Grande",
                        "duration": "3 hours",
                        "price": "$25",
                        "likes": 15,
                        "tags": [
                            "adventure",
                            "outdoors"
                        ]
                    }
                ]
            }
        ]
    },

    {
        "_id": "64e2a5d4e6610505c2a78cf3",
        "imageUrl": "https://media.istockphoto.com/id/869741554/es/foto/glaciar-y-lago-%C3%BAnico.jpg?s=612x612&w=0&k=20&c=bPtN4yn_jXZUqx_ezqqfXVw_2xIXm0ykL6MobcQiEKI=",
        "title": "Argentina",
        "location": "Perito Moreno Glacier, El Calafate",
        "briefDescription": "El Calafate's Perito Moreno Glacier is a stunning natural marvel.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Glacier Expedition",
                "activities": [
                    {
                        "name": "Perito Moreno Glacier Trek",
                        "duration": "6 hours",
                        "price": "$25",
                        "likes": 22,
                        "tags": [
                            "nature",
                            "adventure"
                        ]
                    },
                    {
                        "name": "Boat Tour to Glacier Walls",
                        "duration": "3.5 hours",
                        "price": "$40",
                        "likes": 38,
                        "tags": [
                            "nature",
                            "fun"
                        ]
                    }
                ]
            },
            {
                "name": "Adventure Trek",
                "activities": [
                    {
                        "name": "Mountain Trek to Abra Pampa",
                        "duration": "6 hours",
                        "price": "$15",
                        "likes": 20,
                        "tags": [
                            "nature",
                            "adventure"
                        ]
                    },
                    {
                        "name": "River Rafting in Rio Grande",
                        "duration": "3 hours",
                        "price": "$25",
                        "likes": 15,
                        "tags": [
                            "adventure",
                            "outdoors"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cf4",
        "imageUrl": "https://media.istockphoto.com/id/475124388/es/foto/white-church-en-la-ciudad-de-oia-en-la-isla-de-santorini-grecia.jpg?s=612x612&w=0&k=20&c=g4KEhVLC3CldeuFK_ki_Z9Nt60NHQRmtEtcHamUvGO4=",
        "title": "Greece",
        "location": "Santorini Island",
        "briefDescription": "Santorini, a stunning Greek island, is famous for its breathtaking views.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Cultural and Nature Experience",
                "activities": [
                    {
                        "name": "Explore Ancient Akrotiri",
                        "duration": "3 hours",
                        "price": "$12",
                        "likes": 18,
                        "tags": [
                            "history",
                            "culture"
                        ]
                    },
                    {
                        "name": "Sunset Cruise around Caldera",
                        "duration": "3.5 hours",
                        "price": "$50",
                        "likes": 28,
                        "tags": [
                            "nature",
                            "relaxation"
                        ]
                    }
                ]
            },
            {
                "name": "Island Adventure",
                "activities": [
                    {
                        "name": "Hike to Skaros Rock",
                        "duration": "4 hours",
                        "price": "$20",
                        "likes": 15,
                        "tags": [
                            "adventure",
                            "outdoors"
                        ]
                    },
                    {
                        "name": "Wine Tasting in Local Vineyards",
                        "duration": "2 hours",
                        "price": "$35",
                        "likes": 10,
                        "tags": [
                            "culture",
                            "food"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cf5",
        "imageUrl": "https://media.istockphoto.com/id/1186175170/es/foto/bali-indonesia-traveler-on-tree-house-en-diamond-beach-en-nusa-penida-island.jpg?s=612x612&w=0&k=20&c=ynS6L2ylYm8p_EBr7B328osKaWuO9zQ0tWckgKLD6_I=",
        "title": "Indonesia",
        "location": "Nusa Penida Island",
        "briefDescription": "Nusa Penida Island in Indonesia is a paradise for nature lovers.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Nature and Adventure Escape",
                "activities": [
                    {
                        "name": "Kelingking Beach Hike",
                        "duration": "4 hours",
                        "price": "$15",
                        "likes": 20,
                        "tags": [
                            "adventure",
                            "nature"
                        ]
                    },
                    {
                        "name": "Snorkeling at Crystal Bay",
                        "duration": "2.5 hours",
                        "price": "$30",
                        "likes": 18,
                        "tags": [
                            "adventure",
                            "water"
                        ]
                    }
                ]
            },
            {
                "name": "Cultural Exploration",
                "activities": [
                    {
                        "name": "Local Village Visit",
                        "duration": "3 hours",
                        "price": "$10",
                        "likes": 15,
                        "tags": [
                            "culture",
                            "community"
                        ]
                    },
                    {
                        "name": "Traditional Balinese Dance Show",
                        "duration": "2 hours",
                        "price": "$20",
                        "likes": 12,
                        "tags": [
                            "culture",
                            "entertainment"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cf6",
        "imageUrl": "https://media.istockphoto.com/id/1133449890/es/foto/tour-eiffel-y-paisaje-urbano-de-par%C3%ADs.jpg?s=612x612&w=0&k=20&c=DutLoH8kvbitNtHiT-4JT7zslHHjcs3lq9Ud78lLneU=",
        "title": "France",
        "location": "Eiffel Tower, Paris",
        "briefDescription": "The iconic Eiffel Tower defines the Parisian skyline.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Parisian Delights",
                "activities": [
                    {
                        "name": "Louvre Museum Exploration",
                        "duration": "3.5 hours",
                        "price": "$18",
                        "likes": 25,
                        "tags": [
                            "culture",
                            "art"
                        ]
                    },
                    {
                        "name": "Seine River Cruise",
                        "duration": "2 hours",
                        "price": "$30",
                        "likes": 30,
                        "tags": [
                            "leisure",
                            "relaxation"
                        ]
                    }
                ]
            },
            {
                "name": "Charming Streets of Paris",
                "activities": [
                    {
                        "name": "Montmartre Neighborhood Tour",
                        "duration": "3 hours",
                        "price": "$10",
                        "likes": 15,
                        "tags": [
                            "culture",
                            "history"
                        ]
                    },
                    {
                        "name": "French Pastry Tasting",
                        "duration": "1.5 hours",
                        "price": "$12",
                        "likes": 20,
                        "tags": [
                            "culinary",
                            "food"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cf7",
        "imageUrl": "https://media.istockphoto.com/id/1169074379/es/foto/la-estatua-de-la-libertad-con-el-edificio-one-world-trade-se-centra-sobre-el-r%C3%ADo-hudson-y-el.jpg?s=612x612&w=0&k=20&c=xpiIDmtoWs1cFyXB_U2AFP-JYXxmMb4F3rgTpaV7pJc=",
        "title": "United States of America",
        "location": "New York City",
        "briefDescription": "The vibrant city of New York offers a blend of cultures and experiences.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Iconic NYC",
                "activities": [
                    {
                        "name": "Statue of Liberty and Ellis Island Tour",
                        "duration": "4.5 hours",
                        "price": "$28",
                        "likes": 28,
                        "tags": [
                            "history",
                            "culture"
                        ]
                    },
                    {
                        "name": "Central Park Stroll",
                        "duration": "2 hours",
                        "price": "$0",
                        "likes": 35,
                        "tags": [
                            "nature",
                            "relaxation"
                        ]
                    }
                ]
            },
            {
                "name": "Broadway Extravaganza",
                "activities": [
                    {
                        "name": "Broadway Show in Times Square",
                        "duration": "3 hours",
                        "price": "$70",
                        "likes": 42,
                        "tags": [
                            "entertainment",
                            "culture"
                        ]
                    },
                    {
                        "name": "Dinner at a Local Eatery",
                        "duration": "2 hours",
                        "price": "$40",
                        "likes": 18,
                        "tags": [
                            "culinary",
                            "food"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cf8",
        "imageUrl": "https://images.pexels.com/photos/13558679/pexels-photo-13558679.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Argentina",
        "location": "Fitz Roy Mountain, Patagonia",
        "briefDescription": "Patagonia's Fitz Roy Mountain is a must-see for hikers and adventurers.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Mountain Expedition",
                "activities": [
                    {
                        "name": "Fitz Roy Mountain Trek",
                        "duration": "7 hours",
                        "price": "$30",
                        "likes": 32,
                        "tags": [
                            "nature",
                            "adventure"
                        ]
                    },
                    {
                        "name": "Scenic Picnic Lunch",
                        "duration": "1.5 hours",
                        "price": "$15",
                        "likes": 22,
                        "tags": [
                            "outdoors",
                            "relaxation"
                        ]
                    }
                ]
            },
            {
                "name": "Starry Night Camping",
                "activities": [
                    {
                        "name": "Camping under the Stars",
                        "duration": "1 night",
                        "price": "$50",
                        "likes": 18,
                        "tags": [
                            "adventure",
                            "nature"
                        ]
                    },
                    {
                        "name": "Astrophotography Session",
                        "duration": "2 hours",
                        "price": "$20",
                        "likes": 25,
                        "tags": [
                            "photography",
                            "nightlife"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cf9",
        "imageUrl": "https://images.pexels.com/photos/8242968/pexels-photo-8242968.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Argentina",
        "location": "Corrientes Avenue, Buenos Aires City",
        "briefDescription": "Buenos Aires' Corrientes Avenue is a cultural hub.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Cultural Discovery",
                "activities": [
                    {
                        "name": "Tango Dance Class",
                        "duration": "2 hours",
                        "price": "$20",
                        "likes": 18,
                        "tags": [
                            "culture",
                            "dance"
                        ]
                    },
                    {
                        "name": "Exploring Recoleta Cemetery",
                        "duration": "3 hours",
                        "price": "$10",
                        "likes": 14,
                        "tags": [
                            "culture",
                            "history"
                        ]
                    }
                ]
            },
            {
                "name": "Theater Night",
                "activities": [
                    {
                        "name": "Broadway Show in Buenos Aires",
                        "duration": "3 hours",
                        "price": "$30",
                        "likes": 26,
                        "tags": [
                            "entertainment",
                            "nightlife"
                        ]
                    },
                    {
                        "name": "Dinner at Local Bistro",
                        "duration": "2 hours",
                        "price": "$25",
                        "likes": 20,
                        "tags": [
                            "food",
                            "culture"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cfa",
        "imageUrl": "https://images.pexels.com/photos/13457173/pexels-photo-13457173.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Argentina",
        "location": "Desert, San Salvador de Jujuy",
        "briefDescription": "San Salvador de Jujuy's desert landscape is captivating.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Desert Exploration",
                "activities": [
                    {
                        "name": "Salinas Grandes Salt Flats Tour",
                        "duration": "6 hours",
                        "price": "$40",
                        "likes": 28,
                        "tags": [
                            "nature",
                            "adventure"
                        ]
                    },
                    {
                        "name": "Photography Session in the Desert",
                        "duration": "2 hours",
                        "price": "$15",
                        "likes": 16,
                        "tags": [
                            "nature",
                            "photography"
                        ]
                    }
                ]
            },
            {
                "name": "Starry Night",
                "activities": [
                    {
                        "name": "Stargazing in the Desert",
                        "duration": "2 hours",
                        "price": "$20",
                        "likes": 18,
                        "tags": [
                            "nature",
                            "nightlife"
                        ]
                    },
                    {
                        "name": "Campfire Stories and Music",
                        "duration": "3 hours",
                        "price": "$10",
                        "likes": 12,
                        "tags": [
                            "culture",
                            "entertainment"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cfb",
        "imageUrl": "https://images.pexels.com/photos/8242973/pexels-photo-8242973.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Argentina",
        "location": "Iguazú Falls, Devil's Throat",
        "briefDescription": "Witness the majestic Iguazú Falls in Argentina.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.527Z",
        "updatedAt": "2023-08-20T23:46:28.527Z",
        "itineraries": [
            {
                "name": "Waterfall Wonder",
                "activities": [
                    {
                        "name": "Full-day Iguazú Falls Tour",
                        "duration": "8 hours",
                        "price": "$50",
                        "likes": 32,
                        "tags": [
                            "nature",
                            "adventure"
                        ]
                    },
                    {
                        "name": "Boat Ride under the Falls",
                        "duration": "2.5 hours",
                        "price": "$45",
                        "likes": 24,
                        "tags": [
                            "nature",
                            "water"
                        ]
                    }
                ]
            },
            {
                "name": "Nature's Symphony",
                "activities": [
                    {
                        "name": "Birdwatching in the Rainforest",
                        "duration": "3 hours",
                        "price": "$20",
                        "likes": 15,
                        "tags": [
                            "nature",
                            "wildlife"
                        ]
                    },
                    {
                        "name": "Nighttime Jungle Walk",
                        "duration": "2 hours",
                        "price": "$10",
                        "likes": 8,
                        "tags": [
                            "nature",
                            "nightlife"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cfc",
        "imageUrl": "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Barcelona, Spain",
        "location": "La Sagrada Familia and Park Güell",
        "briefDescription": "Barcelona's landmarks showcase Gaudi's genius.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.528Z",
        "updatedAt": "2023-08-20T23:46:28.528Z",
        "itineraries": [
            {
                "name": "Architectural Wonders",
                "activities": [
                    {
                        "name": "La Sagrada Familia Tour",
                        "duration": "2.5 hours",
                        "price": "$30",
                        "likes": 28,
                        "tags": [
                            "culture",
                            "architecture"
                        ]
                    },
                    {
                        "name": "Park Güell Exploration",
                        "duration": "3 hours",
                        "price": "$20",
                        "likes": 18,
                        "tags": [
                            "culture",
                            "nature"
                        ]
                    }
                ]
            },
            {
                "name": "Gaudi Experience",
                "activities": [
                    {
                        "name": "Casa Batlló Guided Visit",
                        "duration": "1.5 hours",
                        "price": "$25",
                        "likes": 14,
                        "tags": [
                            "culture",
                            "architecture"
                        ]
                    },
                    {
                        "name": "Gaudi's Art Walking Tour",
                        "duration": "2.5 hours",
                        "price": "$15",
                        "likes": 10,
                        "tags": [
                            "culture",
                            "art"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cfd",
        "imageUrl": "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Rome, Italy",
        "location": "Colosseum and Ancient Ruins",
        "briefDescription": "Rome's Colosseum is a testament to ancient history.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.528Z",
        "updatedAt": "2023-08-20T23:46:28.528Z",
        "itineraries": [
            {
                "name": "Historical Discovery",
                "activities": [
                    {
                        "name": "Colosseum Guided Tour",
                        "duration": "2.5 hours",
                        "price": "$35",
                        "likes": 30,
                        "tags": [
                            "culture",
                            "history"
                        ]
                    },
                    {
                        "name": "Roman Forum and Palatine Hill Visit",
                        "duration": "3 hours",
                        "price": "$25",
                        "likes": 22,
                        "tags": [
                            "culture",
                            "history"
                        ]
                    }
                ]
            },
            {
                "name": "Art and Architecture",
                "activities": [
                    {
                        "name": "Vatican Museums and Sistine Chapel",
                        "duration": "4 hours",
                        "price": "$40",
                        "likes": 35,
                        "tags": [
                            "culture",
                            "art"
                        ]
                    },
                    {
                        "name": "Pantheon Exploration",
                        "duration": "1.5 hours",
                        "price": "$10",
                        "likes": 18,
                        "tags": [
                            "culture",
                            "architecture"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "_id": "64e2a5d4e6610505c2a78cfe",
        "imageUrl": "https://images.pexels.com/photos/3605968/pexels-photo-3605968.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Budapest, Hungary",
        "location": "Parliament Building and Danube River",
        "briefDescription": "Budapest's landmarks offer a blend of history and beauty.",
        "__v": 0,
        "createdAt": "2023-08-20T23:46:28.528Z",
        "updatedAt": "2023-08-20T23:46:28.528Z",
        "itineraries": [
            {
                "name": "Historical Discovery",
                "activities": [
                    {
                        "name": "Parliament Building Guided Tour",
                        "duration": "2 hours",
                        "price": "$25",
                        "likes": 28,
                        "tags": [
                            "culture",
                            "history"
                        ]
                    },
                    {
                        "name": "Danube River Cruise",
                        "duration": "1.5 hours",
                        "price": "$20",
                        "likes": 32,
                        "tags": [
                            "culture",
                            "sightseeing"
                        ]
                    }
                ]
            },
            {
                "name": "Cultural and Culinary Delights",
                "activities": [
                    {
                        "name": "Buda Castle and Hungarian Cuisine",
                        "duration": "5 hours",
                        "price": "$40",
                        "likes": 42,
                        "tags": [
                            "culture",
                            "food"
                        ]
                    },
                    {
                        "name": "Local Craft Market",
                        "duration": "2 hours",
                        "price": "$10",
                        "likes": 15,
                        "tags": [
                            "culture",
                            "shopping"
                        ]
                    }
                ]
            }
        ]
    }
];

export default citiesData;
City.insertMany(citiesData);