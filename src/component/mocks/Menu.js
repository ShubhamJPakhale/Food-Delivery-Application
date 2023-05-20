export const Menu_Data = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "83296",
              name: "PK Biryani House (Deccan)",
              city: "Pune",
              slugs: {
                restaurant: "pk-biryani-house-deccan-gymkhana-shivaji-nagar",
                city: "pune",
              },
              uniqueId: "fc52fdf0-4f29-4dea-93f0-f1f613a817b8",
              cloudinaryImageId: "pzg64dwsbfozjxxrjf4c",
              locality: "Narayan Peth",
              areaName: "Deccan Gymkhana",
              costForTwo: "40000",
              costForTwoMessage: "₹400 for two",
              cuisines: ["Biryani", "Maharashtrian"],
              avgRating: 4.1,
              feeDetails: {
                restaurantId: "83296",
                fees: [
                  { name: "distance", fee: 3300 },
                  { name: "time" },
                  { name: "special" },
                ],
                totalFee: 3300,
                icon: "v1648635511/Delivery_fee_new_cjxumu",
                message: "2.2 kms | ₹33 Delivery fee will apply",
              },
              parentId: "3260",
              avgRatingString: "4.1",
              totalRatingsString: "10K+ ratings",
              sla: {
                restaurantId: "83296",
                deliveryTime: 39,
                minDeliveryTime: 39,
                maxDeliveryTime: 39,
                lastMileTravel: 2.3,
                serviceability: "SERVICEABLE",
                stressFactor: 0.7667129,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 94,
                slaString: "39 MINS",
                lastMileTravelString: "2.2 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-05-14 16:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  { discountType: "Flat", operationType: "RESTAURANT" },
                ],
                descriptionList: [
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat ₹100 off | Use ICICINB100 Above ₹700",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "pk-biryani-house-deccan-gymkhana-shivaji-nagar",
              isOpen: true,
              labels: [
                { title: "Timings", message: "null" },
                {
                  title: "Address",
                  message: "Deccan Gymkhana, Pune, Maharashtra 411004",
                },
                { title: "Cuisines", message: "Biryani,Maharashtrian" },
              ],
              totalRatings: 10000,
              aggregatedDiscountInfoV2: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  { discountType: "Flat", operationType: "RESTAURANT" },
                ],
                descriptionList: [
                  {
                    meta: "50% off up to ₹100 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Flat ₹100 off | Use ICICINB100 Above ₹700",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  minValue: 560,
                  maxValue: 800,
                  priority: 3,
                  couponCode: "PARTY",
                  discountInfo: { discountType: "Percentage", value: 15 },
                  lockedMessage:
                    "Add items worth ₹<amount> to unlock flat 15% off | Code PARTY",
                  unlockedMessage:
                    "PARTY Coupon Unlocked! Use it to save flat 15% off",
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/83296",
              },
              expectationNotifiers: [
                {
                  text: "2.2 kms | ₹33 Delivery fee will apply",
                  icon: { imageId: "v1648635511/Delivery_fee_new_cjxumu" },
                  popup: { cta: {} },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  enrichedText: "<b>2.2 kms</b> | ₹33 Delivery fee will apply",
                  halfCardPopup: { halfCardPopupHeader: {} },
                },
              ],
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
              areaPostalCode: "0",
              latLong: "18.515396,73.84248400000001",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 10, right: 10, bottom: 16 },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "50% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      offerIds: ["485f5787-5146-4cfd-bc41-5453ffb4a31c"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹159",
                      offerType: "offers",
                      restId: "83296",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT ₹100 OFF",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12",
                      offerIds: ["62613206-b3ea-4b42-8112-7371dd8cda9b"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE ICICINB100",
                      description: "ABOVE ₹700",
                      offerType: "offers",
                      restId: "83296",
                      offerLogo:
                        "rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT 15% OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["c36fa365-8ec4-4428-9daf-912fb04e0bca"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE PARTY",
                      description: "ABOVE ₹800",
                      offerType: "offers",
                      restId: "83296",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹150",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12",
                      offerIds: ["90a73134-3bb5-4ee1-9fd0-f6088f0aaf40"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE ICICIAMZ",
                      description: "ABOVE ₹600",
                      offerType: "offers",
                      restId: "83296",
                      offerLogo:
                        "rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹200",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                      offerIds: ["04b9f91a-7cdf-41e5-9e85-48d913c5749f"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE INDUSIND20",
                      description: "ABOVE ₹600",
                      offerType: "offers",
                      restId: "83296",
                      offerLogo:
                        "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                ],
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607378",
                              name: "Chicken Tikka Biryani ",
                              category: "Biryani By Kg",
                              description:
                                "Serves 1 | Deliciously decadent flavored dum rice layered with spicy chicken tikka and Indian whole spices cooked in a pot.",
                              imageId: "acbgem5eobijjjqqpu4n",
                              inStock: 1,
                              price: 80000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784300",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "35494685",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 61000,
                                        id: "35494687",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "176 ratings",
                                  ratingCountV2: "176",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607373",
                              name: "Mutton Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "wlylrzxuteytzrhubq6l",
                              inStock: 1,
                              price: 87000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784295",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494676",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 87000,
                                        id: "35494677",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "506 ratings",
                                  ratingCountV2: "506",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607382",
                              name: "Paneer Tikka Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "qwwqugw8vu5nqrqigyll",
                              inStock: 1,
                              isVeg: 1,
                              price: 45000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784303",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494692",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 30000,
                                        id: "35494693",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "23 ratings",
                                  ratingCountV2: "23",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607384",
                              name: "Shahi Veg Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "ocsxaix0sydnqhlbvl56",
                              inStock: 1,
                              isVeg: 1,
                              price: 45000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784304",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494694",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 30000,
                                        id: "35494695",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607374",
                              name: "Chicken Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "jxrp6ewwn8gzntzsreig",
                              inStock: 1,
                              price: 66000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784296",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "35494678",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 53000,
                                        id: "35494679",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "423 ratings",
                                  ratingCountV2: "423",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942642",
                              name: "Special Mutton Biryani",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "dposjfmxm2tcqgaexdxa",
                              inStock: 1,
                              price: 93000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "2165236",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "52881565",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 87000,
                                        id: "52881566",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "239 ratings",
                                  ratingCountV2: "239",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942589",
                              name: "Special Chicken Biryani",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "feddey29xu9kukaex82l",
                              inStock: 1,
                              price: 70000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "2165230",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "52881568",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 55000,
                                        id: "52881569",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.8",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158082",
                              name: "Veg Biryani   ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "qpmalmp79nqta3lbp46t",
                              inStock: 1,
                              isVeg: 1,
                              price: 49500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877673",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "52881570",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 33000,
                                        id: "52881572",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "142 ratings",
                                  ratingCountV2: "142",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607379",
                              name: "Chicken Boneless Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "hz53gunarr3eh87qema6",
                              inStock: 1,
                              price: 80000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784301",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494688",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 61000,
                                        id: "35494689",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "79 ratings",
                                  ratingCountV2: "79",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607412",
                              name: "Chicken Tandoori   ",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1",
                              imageId: "nwjag1efy01guktvslhd",
                              inStock: 1,
                              price: 26000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784307",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (4 Pcs)",
                                        default: 1,
                                        id: "35494700",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (8 Pcs)",
                                        price: 14000,
                                        id: "35494701",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "102 ratings",
                                  ratingCountV2: "102",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607415",
                              name: "Chicken Angara Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Dry | Serves 1",
                              imageId: "zf9giawrpi12qclaj74r",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607417",
                              name: "Chicken Tikka ",
                              category: "Chicken Tandoori Kebab",
                              description: "10 pieces | Serves 1",
                              imageId: "c8amjcixlmbefkysn0ny",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "10 pieces",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607396",
                              name: "Chicken Lehsuni Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              imageId: "fdc325433abdedfc187c20a2fe4b342a",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607394",
                              name: "Chicken Chilly (10 pcs Kebab)",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              imageId: "cxa75ygiobmfoufehm4r",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607413",
                              name: "Chicken Banjara Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              imageId: "p13yxie5mw8gxtqmvmra",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607355",
                              name: "Chicken Pahadi Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              imageId: "tdpl8cuqevjdqbcdlda4",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "146 ratings",
                                  ratingCountV2: "146",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942593",
                              name: "Butter Chicken Boneless",
                              category: "Chicken     ",
                              description: "Gravy | Serves 1",
                              imageId: "mbs42hgzxwxsqjwfw102",
                              inStock: 1,
                              price: 35000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "2165231",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (3 Pcs)",
                                        default: 1,
                                        id: "7571821",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (5 Pcs)",
                                        price: 27500,
                                        id: "7571822",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942598",
                              name: "Chicken Tikka Masala ( 8 Pieces )",
                              category: "Chicken     ",
                              description: "Serves 2",
                              imageId: "iv59yfcwr0b1qnrzldnf",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 2",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942672",
                              name: "Chicken Handi",
                              category: "Chicken     ",
                              description: "Dry | Serves 1",
                              imageId: "x8fsjkwv2dfxnankdsal",
                              inStock: 1,
                              price: 36500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "2165240",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (7 Pcs)",
                                        default: 1,
                                        id: "7571839",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 21500,
                                        id: "7571840",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "25 ratings",
                                  ratingCountV2: "25",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607392",
                              name: "Chicken Fry ",
                              category: "Chicken     ",
                              description: "Serves 1 | 6pcs for 2 persons.",
                              imageId: "yqnthtutkv7sb07i2q9x",
                              inStock: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942667",
                              name: "Chicken Masala",
                              category: "Chicken     ",
                              description: "Serves 1 | 6pcs for 2 persons.",
                              imageId: "ekqonlvlgb5ocdptjkcw",
                              inStock: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "53 ratings",
                                  ratingCountV2: "53",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158094",
                              name: "Chicken Murgh Musallam Boneless",
                              category: "Chicken     ",
                              description: "Serves 1",
                              imageId: "ws2sw76rrcg5nukj5ran",
                              inStock: 1,
                              price: 39000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877677",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6 Pcs)",
                                        default: 1,
                                        id: "52881583",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 26000,
                                        id: "52881584",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607430",
                              name: "Chicken Boneless Handi ",
                              category: "Chicken     ",
                              description: "Serves 1",
                              imageId: "sx0e3bxfzdlsin3zrtkj",
                              inStock: 1,
                              price: 35000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784315",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (7 Pcs)",
                                        default: 1,
                                        id: "35494716",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 27000,
                                        id: "35494717",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607372",
                              name: "Chicken Biryani",
                              category: "Biryani",
                              description:
                                "Medium Spicy | Comes with lemon and onion ,   tambada rassa and Pandhara Rassa | Serves 1",
                              imageId: "narzzp5d7ygsoxeccqqi",
                              inStock: 1,
                              price: 21000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784294",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494674",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14500,
                                        id: "35494675",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021508",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381029",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021510",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021509",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                spiceLevel: "MEDIUMSPICY",
                                accompaniments:
                                  "Served with lemon and onion and tambada rassa and Pandhara Rassa",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "3432 ratings",
                                  ratingCountV2: "3432",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607380",
                              name: "Chicken Tikka Biryani  ",
                              category: "Biryani",
                              description:
                                "Serves 1 | Deliciously decadent flavored dum rice layered with spicy chicken tikka and Indian whole spices cooked in a pot.",
                              imageId: "tebkp5znrbyhgz7hmh8p",
                              inStock: 1,
                              price: 27500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784302",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494690",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 11000,
                                        id: "35494691",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021519",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021518",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380997",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021520",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "176 ratings",
                                  ratingCountV2: "176",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942605",
                              name: "Veg Biryani",
                              category: "Biryani",
                              description:
                                "Medium Spicy | Comes with lemon and onion ,   tambada rassa and Pandhara Rassa | Serves 1",
                              imageId: "qpmalmp79nqta3lbp46t",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877690",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "52881636",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 9500,
                                        id: "52881637",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021500",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021499",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380994",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021501",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                spiceLevel: "MEDIUMSPICY",
                                accompaniments:
                                  "Served with lemon and onion and tambada rassa and Pandhara Rassa",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "1213 ratings",
                                  ratingCountV2: "1213",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607367",
                              name: "Mutton Biryani      [ served with gravy]             ",
                              category: "Biryani",
                              description: "Serves 1 | serves 1",
                              imageId: "xv4cnlixufufmcwxp1tz",
                              inStock: 1,
                              price: 23000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784291",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494667",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 15500,
                                        id: "35494668",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021507",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021506",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021505",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380999",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "129 ratings",
                                  ratingCountV2: "129",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607375",
                              name: "Chicken Boneless Biryani  ",
                              category: "Biryani",
                              description: "Serves 1",
                              imageId: "ixvrzkstsivqmwxp8fhi",
                              inStock: 1,
                              price: 26500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784297",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494680",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 11000,
                                        id: "35494681",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021511",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381000",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021513",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021512",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "79 ratings",
                                  ratingCountV2: "79",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607383",
                              name: "Egg Biryani ",
                              category: "Biryani",
                              description: "Serves 1",
                              imageId: "ui7dxeu6hmujmvzz5mdm",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877671",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (2 Eggs)",
                                        default: 1,
                                        id: "52881561",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (4 Eggs)",
                                        price: 10000,
                                        id: "52881562",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021522",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380996",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021521",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021523",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "68 ratings",
                                  ratingCountV2: "68",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607360",
                              name: "Paneer Tikka Biryani              ",
                              category: "Biryani",
                              description: "Serves 1 | 8 pcs for 2 persons.",
                              imageId: "qwwqugw8vu5nqrqigyll",
                              inStock: 1,
                              isVeg: 1,
                              price: 27500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021504",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021503",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021502",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380998",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "23 ratings",
                                  ratingCountV2: "23",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942602",
                              name: "Egg Thali",
                              category: "Thalis",
                              description:
                                "Serves 1 | Chapati-2/Roti-2/ Bhakari-2/ Plain Rice.",
                              imageId: "sesyokv5myls6aog1lud",
                              inStock: 1,
                              price: 21000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877697",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati - 3",
                                        default: 1,
                                        id: "52881653",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri - 2",
                                        id: "52881654",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942594",
                              name: "Mutton Thali (Mutton masala + Egg Masala + Mutton Biryani + Keema + Chapati -3 Nos or Bhakri 2 Nos)",
                              category: "Thalis",
                              description: "Serves 1 | (Serves 1)",
                              imageId: "fkcqrohvk88q4t52dnvf",
                              inStock: 1,
                              price: 37000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10785745",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati - 3",
                                        default: 1,
                                        id: "35501582",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri - 2",
                                        id: "35501583",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607410",
                              name: "Chicken Lollipop Dry",
                              category: "Starters or Kebabs",
                              description: "Serves 1",
                              imageId: "fbtbqym2yehnrapodz5e",
                              inStock: 1,
                              price: 22000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784306",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494698",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 16500,
                                        id: "35494699",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381009",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "29 ratings",
                                  ratingCountV2: "29",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942613",
                              name: "Mutton Fry",
                              category: "Starters or Kebabs",
                              description:
                                "Serves 1 | Tender mutton pieces cooked in traditional secret spices and deep fried in oil.",
                              imageId: "nsbuagjvcjklmkejomen",
                              inStock: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78380992",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607358",
                              name: "Chicken Lollipop  Masala",
                              category: "Starters or Kebabs",
                              description: "Serves 1",
                              imageId: "kheobekjvtormnvcwi0n",
                              inStock: 1,
                              price: 24000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784288",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        id: "35494660",
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 15000,
                                        id: "35494661",
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381012",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158100",
                              name: "Paneer Banjara Kebab ",
                              category: "Veg Starters",
                              description: "8 pieces | Serves 1",
                              imageId: "rcpyjdeacqr9pubxup3n",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "8 pieces",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158102",
                              name: "Paneer Chilli ",
                              category: "Veg Starters",
                              description: "10 pieces | Serves 1",
                              imageId: "mmolo8dc5b6c6zrhklwv",
                              inStock: 1,
                              isVeg: 1,
                              price: 33000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "10 pieces",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942609",
                              name: "Veg Pulao",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "xhzy36sbmft6c44ewz5g",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942616",
                              name: "Paneer Tikka Masala",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "gwvztm1xodfeqgpmxecm",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158104",
                              name: "Veg Biryani                             ",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "qpmalmp79nqta3lbp46t",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "142 ratings",
                                  ratingCountV2: "142",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942622",
                              name: "Veg Maratha",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "g0zm0cwipr7uwnav7aze",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942624",
                              name: "Paneer Butter Masala",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "y2dn6uekq4zrctvfbsu2",
                              inStock: 1,
                              isVeg: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942639",
                              name: "Dal Tadka",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "o0oriefdfbejzfwqdcje",
                              inStock: 1,
                              isVeg: 1,
                              price: 18500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158106",
                              name: "Veg Kolhapuri                                          ",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "buyb3fcdg6d9it7zx7hn",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607364",
                              name: "Dal Khichdi",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "cscw5dk4fvsbhccxsqea",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942612",
                              name: "Solkadhi",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "no2jmfdm5lqhbygd8mbp",
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "36 ratings",
                                  ratingCountV2: "36",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607421",
                              name: "Mutton Handi",
                              category: "Special Mutton Dish",
                              description: "Serves 2",
                              imageId: "v3djcht3fd7xrfmpwbra",
                              inStock: 1,
                              price: 38500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784309",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494704",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 29500,
                                        id: "35494705",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 2",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942620",
                              name: "Veg Kolhapuri",
                              category: "Veg Main Course",
                              description: "Serves 1",
                              imageId: "buyb3fcdg6d9it7zx7hn",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381034",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381035",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158073",
                              name: "Pomfret Fry",
                              category: "Seafood",
                              description: "Serves 1",
                              imageId: "ye794fwgazb9z3basxey",
                              inStock: 1,
                              price: 51500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158072",
                              name: "Surmai New Tawa ",
                              category: "Seafood",
                              description: "Serves 1 | 4pcs for 2 persons.",
                              imageId: "mmtwn6ukccfmgmxctokb",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877669",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (2 Pcs)",
                                        default: 1,
                                        id: "52881557",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (4 Pcs)",
                                        price: 18000,
                                        id: "52881558",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607424",
                              name: "Chicken Lasooni Masala Boneless",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "vh5hu6pytebpv5jb1lty",
                              inStock: 1,
                              price: 30000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784310",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494706",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 25000,
                                        id: "35494707",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381019",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381020",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607426",
                              name: "Chicken Kala Masala Handi(Half)",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "o9bdywuhfmz05rjdlg56",
                              inStock: 1,
                              price: 31000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784312",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494710",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 20000,
                                        id: "35494711",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381007",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381006",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607427",
                              name: "Kolhapuri Chicken Masala",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "nzfr6x5se41mjxmvt5yg",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381025",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381026",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607428",
                              name: "Chicken Banjara Masala ",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "oeupytbrjygna6fahixt",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784313",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494712",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 25500,
                                        id: "35494713",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381023",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381024",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607433",
                              name: "Egg Masala ",
                              category: "Non Veg Main Corse",
                              description: "Serves 1 | 2 eggs for 2 persons.",
                              imageId: "bvfhnsbz9ksxd4dvznqz",
                              inStock: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381014",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381013",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607420",
                              name: "Mutton Keema Fry",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "ia2reun4uth7b5i0mluv",
                              inStock: 1,
                              price: 22000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784308",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        id: "35494702",
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "35494703",
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381018",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381017",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "25 ratings",
                                  ratingCountV2: "25",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Indian Bread",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942586",
                              name: "Butter Roti",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607385",
                              name: "Red Rassa",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158090",
                              name: "Tambda Pandara Rassa",
                              category: "Indian Bread",
                              description: "Serves 1 | Mutton.",
                              inStock: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607386",
                              name: "White Rassa",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607388",
                              name: "Chapati ",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 1500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "55 ratings",
                                  ratingCountV2: "55",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607389",
                              name: "Roti ",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 2000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.8",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607390",
                              name: "Naan ",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607391",
                              name: "Butter Naan",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "16 ratings",
                                  ratingCountV2: "16",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "36919502",
                              name: "Garlic Naan",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158088",
                              name: "Cheese Butter Garlic Naan",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158089",
                              name: "Butter Garlic Naan   ",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 9000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607387",
                              name: "Jawar Bhakri ",
                              category: "Indian Bread",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "24 ratings",
                                  ratingCountV2: "24",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Biryani By Kg",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607369",
                              name: "Paneer Tikka Biryani Pack",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 45000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784292",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494669",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 30000,
                                        id: "35494670",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "1.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607378",
                              name: "Chicken Tikka Biryani ",
                              category: "Biryani By Kg",
                              description:
                                "Serves 1 | Deliciously decadent flavored dum rice layered with spicy chicken tikka and Indian whole spices cooked in a pot.",
                              imageId: "acbgem5eobijjjqqpu4n",
                              inStock: 1,
                              price: 80000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784300",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "35494685",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 61000,
                                        id: "35494687",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "176 ratings",
                                  ratingCountV2: "176",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607376",
                              name: "Chicken Tandoor Biryani",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              inStock: 1,
                              price: 78000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784298",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494682",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 51000,
                                        id: "35494683",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "22 ratings",
                                  ratingCountV2: "22",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607371",
                              name: "Shahi Veg Biryani (1/2 kg pack)",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607373",
                              name: "Mutton Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "wlylrzxuteytzrhubq6l",
                              inStock: 1,
                              price: 87000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784295",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494676",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 87000,
                                        id: "35494677",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "506 ratings",
                                  ratingCountV2: "506",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607382",
                              name: "Paneer Tikka Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "qwwqugw8vu5nqrqigyll",
                              inStock: 1,
                              isVeg: 1,
                              price: 45000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784303",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494692",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 30000,
                                        id: "35494693",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "23 ratings",
                                  ratingCountV2: "23",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607384",
                              name: "Shahi Veg Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "ocsxaix0sydnqhlbvl56",
                              inStock: 1,
                              isVeg: 1,
                              price: 45000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784304",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494694",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 30000,
                                        id: "35494695",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607374",
                              name: "Chicken Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "jxrp6ewwn8gzntzsreig",
                              inStock: 1,
                              price: 66000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784296",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "35494678",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 53000,
                                        id: "35494679",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "423 ratings",
                                  ratingCountV2: "423",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942642",
                              name: "Special Mutton Biryani",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "dposjfmxm2tcqgaexdxa",
                              inStock: 1,
                              price: 93000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "2165236",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "52881565",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 87000,
                                        id: "52881566",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "239 ratings",
                                  ratingCountV2: "239",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942589",
                              name: "Special Chicken Biryani",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "feddey29xu9kukaex82l",
                              inStock: 1,
                              price: 70000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "2165230",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "52881568",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 55000,
                                        id: "52881569",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.8",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158082",
                              name: "Veg Biryani   ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "qpmalmp79nqta3lbp46t",
                              inStock: 1,
                              isVeg: 1,
                              price: 49500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877673",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "52881570",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 33000,
                                        id: "52881572",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "142 ratings",
                                  ratingCountV2: "142",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607379",
                              name: "Chicken Boneless Biryani ",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              imageId: "hz53gunarr3eh87qema6",
                              inStock: 1,
                              price: 80000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784301",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg",
                                        default: 1,
                                        id: "35494688",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg",
                                        price: 61000,
                                        id: "35494689",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "79 ratings",
                                  ratingCountV2: "79",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607381",
                              name: "Egg Biryani (1 kg)",
                              category: "Biryani By Kg",
                              description: "Serves 1",
                              inStock: 1,
                              price: 47000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877676",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "1/2 Kg (3 Pcs)",
                                        default: 1,
                                        id: "52881579",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "1 Kg (6 Pcs)",
                                        price: 32000,
                                        id: "52881580",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chicken Tandoori Kebab",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607395",
                              name: "Chicken Grills Stick ",
                              category: "Chicken Tandoori Kebab",
                              description: "5 pieces | Serves 1",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "5 pieces",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.5",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607412",
                              name: "Chicken Tandoori   ",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1",
                              imageId: "nwjag1efy01guktvslhd",
                              inStock: 1,
                              price: 26000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784307",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (4 Pcs)",
                                        default: 1,
                                        id: "35494700",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (8 Pcs)",
                                        price: 14000,
                                        id: "35494701",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "102 ratings",
                                  ratingCountV2: "102",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607415",
                              name: "Chicken Angara Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Dry | Serves 1",
                              imageId: "zf9giawrpi12qclaj74r",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607417",
                              name: "Chicken Tikka ",
                              category: "Chicken Tandoori Kebab",
                              description: "10 pieces | Serves 1",
                              imageId: "c8amjcixlmbefkysn0ny",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "10 pieces",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607411",
                              name: "Chicken Kebab Half (5 pcs) ",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1",
                              inStock: 1,
                              price: 16500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158110",
                              name: "Chicken Leg Banjar ",
                              category: "Chicken Tandoori Kebab",
                              description: "5 pieces | Serves 1",
                              inStock: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "5 pieces",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158128",
                              name: "Chicken Kalimiri Kebab ",
                              category: "Chicken Tandoori Kebab",
                              description: "10 pieces | Serves 1",
                              inStock: 1,
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "10 pieces",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158126",
                              name: "Chicken Tandoori Leg Piece (1 Piece )",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1",
                              inStock: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607396",
                              name: "Chicken Lehsuni Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              imageId: "fdc325433abdedfc187c20a2fe4b342a",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607394",
                              name: "Chicken Chilly (10 pcs Kebab)",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              imageId: "cxa75ygiobmfoufehm4r",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158129",
                              name: "Chicken Salt And Pepper",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              inStock: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607413",
                              name: "Chicken Banjara Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              imageId: "p13yxie5mw8gxtqmvmra",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158127",
                              name: "Chicken Achari Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607414",
                              name: "Chicken Chole Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607416",
                              name: "Chicken Seekh Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607355",
                              name: "Chicken Pahadi Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              imageId: "tdpl8cuqevjdqbcdlda4",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "146 ratings",
                                  ratingCountV2: "146",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607356",
                              name: "Chicken Reshmi Kebab",
                              category: "Chicken Tandoori Kebab",
                              description: "Serves 1 | 10 pcs for 2 persons.",
                              inStock: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chicken",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619417",
                              name: "Chicken Keema ",
                              category: "Chicken",
                              description: "Serves 1",
                              inStock: 1,
                              price: 33000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chicken     ",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942593",
                              name: "Butter Chicken Boneless",
                              category: "Chicken     ",
                              description: "Gravy | Serves 1",
                              imageId: "mbs42hgzxwxsqjwfw102",
                              inStock: 1,
                              price: 35000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "2165231",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (3 Pcs)",
                                        default: 1,
                                        id: "7571821",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (5 Pcs)",
                                        price: 27500,
                                        id: "7571822",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158086",
                              name: "Chicken Leshuni Masala",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877675",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6 Pcs)",
                                        default: 1,
                                        id: "52881577",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 25500,
                                        id: "52881578",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942598",
                              name: "Chicken Tikka Masala ( 8 Pieces )",
                              category: "Chicken     ",
                              description: "Serves 2",
                              imageId: "iv59yfcwr0b1qnrzldnf",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 2",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942669",
                              name: "Chicken Maharaja",
                              category: "Chicken     ",
                              description: "Serves 2",
                              inStock: 1,
                              price: 39500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 2",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942672",
                              name: "Chicken Handi",
                              category: "Chicken     ",
                              description: "Dry | Serves 1",
                              imageId: "x8fsjkwv2dfxnankdsal",
                              inStock: 1,
                              price: 36500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "2165240",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (7 Pcs)",
                                        default: 1,
                                        id: "7571839",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 21500,
                                        id: "7571840",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "25 ratings",
                                  ratingCountV2: "25",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607392",
                              name: "Chicken Fry ",
                              category: "Chicken     ",
                              description: "Serves 1 | 6pcs for 2 persons.",
                              imageId: "yqnthtutkv7sb07i2q9x",
                              inStock: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942667",
                              name: "Chicken Masala",
                              category: "Chicken     ",
                              description: "Serves 1 | 6pcs for 2 persons.",
                              imageId: "ekqonlvlgb5ocdptjkcw",
                              inStock: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "53 ratings",
                                  ratingCountV2: "53",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "36919499",
                              name: "Chicken Sultani Masala ( 7 Pieces )",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607354",
                              name: "Chicken Kadhai ( 7 Pieces )",
                              category: "Chicken     ",
                              description: "Serves 2",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 2",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607431",
                              name: "Chicken Boneless Masala ( 5 Pieces)",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607437",
                              name: "Chicken Curry ( 6 Pieces )",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158085",
                              name: "Chicken Tawa Boneless ( 7 Pieces )",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 33000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158093",
                              name: "Chicken Nihari (3 Pieces )",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 33000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942563",
                              name: "Chicken Kolhapuri Fry",
                              category: "Chicken     ",
                              description: "Serves 1 | 5pcs for 2 persons.",
                              inStock: 1,
                              price: 28500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158096",
                              name: "Chicken Boneless Alani (5 Pieces )",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 28000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158080",
                              name: "Chicken Kolhapuri Masala ",
                              category: "Chicken     ",
                              description: "Serves 1 | 5pcs for 2 persons.",
                              inStock: 1,
                              price: 28500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158081",
                              name: "Chicken Banjara Masala Boneless",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 32000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877672",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6 Pcs)",
                                        default: 1,
                                        id: "52881571",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 25000,
                                        id: "52881573",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158084",
                              name: "Chicken Murgh Musallam",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877674",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6 Pcs)",
                                        default: 1,
                                        id: "52881574",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 25500,
                                        id: "52881575",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607425",
                              name: "Chicken Malvani Handi ",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 37000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784311",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (7 Pcs)",
                                        default: 1,
                                        id: "35494708",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 22000,
                                        id: "35494709",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158091",
                              name: "Chicken Kala Masala     ",
                              category: "Chicken     ",
                              description: "Serves 1 | 5pcs for 2 persons.",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158094",
                              name: "Chicken Murgh Musallam Boneless",
                              category: "Chicken     ",
                              description: "Serves 1",
                              imageId: "ws2sw76rrcg5nukj5ran",
                              inStock: 1,
                              price: 39000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877677",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6 Pcs)",
                                        default: 1,
                                        id: "52881583",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 26000,
                                        id: "52881584",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158095",
                              name: "Chicken Angara Masala",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 39000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877678",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (7 Pcs)",
                                        default: 1,
                                        id: "52881585",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 26000,
                                        id: "52881586",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158097",
                              name: "Chicken Handi Kala Masala ",
                              category: "Chicken     ",
                              description: "Serves 1",
                              inStock: 1,
                              price: 35000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877679",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (7 Pcs)",
                                        default: 1,
                                        id: "52881587",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 25000,
                                        id: "52881588",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607430",
                              name: "Chicken Boneless Handi ",
                              category: "Chicken     ",
                              description: "Serves 1",
                              imageId: "sx0e3bxfzdlsin3zrtkj",
                              inStock: 1,
                              price: 35000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784315",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (7 Pcs)",
                                        default: 1,
                                        id: "35494716",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (12 Pcs)",
                                        price: 27000,
                                        id: "35494717",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Beverages",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111262180",
                              name: "Fresh Solkadhi",
                              category: "Beverages",
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Biryani",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607372",
                              name: "Chicken Biryani",
                              category: "Biryani",
                              description:
                                "Medium Spicy | Comes with lemon and onion ,   tambada rassa and Pandhara Rassa | Serves 1",
                              imageId: "narzzp5d7ygsoxeccqqi",
                              inStock: 1,
                              price: 21000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784294",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494674",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14500,
                                        id: "35494675",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021508",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381029",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021510",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021509",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                spiceLevel: "MEDIUMSPICY",
                                accompaniments:
                                  "Served with lemon and onion and tambada rassa and Pandhara Rassa",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "3432 ratings",
                                  ratingCountV2: "3432",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607380",
                              name: "Chicken Tikka Biryani  ",
                              category: "Biryani",
                              description:
                                "Serves 1 | Deliciously decadent flavored dum rice layered with spicy chicken tikka and Indian whole spices cooked in a pot.",
                              imageId: "tebkp5znrbyhgz7hmh8p",
                              inStock: 1,
                              price: 27500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784302",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494690",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 11000,
                                        id: "35494691",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021519",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021518",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380997",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021520",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "176 ratings",
                                  ratingCountV2: "176",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942605",
                              name: "Veg Biryani",
                              category: "Biryani",
                              description:
                                "Medium Spicy | Comes with lemon and onion ,   tambada rassa and Pandhara Rassa | Serves 1",
                              imageId: "qpmalmp79nqta3lbp46t",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877690",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "52881636",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 9500,
                                        id: "52881637",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021500",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021499",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380994",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021501",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                spiceLevel: "MEDIUMSPICY",
                                accompaniments:
                                  "Served with lemon and onion and tambada rassa and Pandhara Rassa",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "1213 ratings",
                                  ratingCountV2: "1213",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619525",
                              name: "Kolambi Biryani",
                              category: "Biryani",
                              description: "Serves 1",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76022174",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76022185",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76022180",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380993",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607367",
                              name: "Mutton Biryani      [ served with gravy]             ",
                              category: "Biryani",
                              description: "Serves 1 | serves 1",
                              imageId: "xv4cnlixufufmcwxp1tz",
                              inStock: 1,
                              price: 23000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784291",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494667",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 15500,
                                        id: "35494668",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021507",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021506",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021505",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380999",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "129 ratings",
                                  ratingCountV2: "129",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607375",
                              name: "Chicken Boneless Biryani  ",
                              category: "Biryani",
                              description: "Serves 1",
                              imageId: "ixvrzkstsivqmwxp8fhi",
                              inStock: 1,
                              price: 26500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784297",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494680",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 11000,
                                        id: "35494681",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021511",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381000",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021513",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021512",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "79 ratings",
                                  ratingCountV2: "79",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607377",
                              name: "Chicken Tandoor Biryani  ",
                              category: "Biryani",
                              description: "Serves 1",
                              inStock: 1,
                              price: 26500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784299",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494684",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 15500,
                                        id: "35494686",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021515",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021514",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021516",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380995",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "22 ratings",
                                  ratingCountV2: "22",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607383",
                              name: "Egg Biryani ",
                              category: "Biryani",
                              description: "Serves 1",
                              imageId: "ui7dxeu6hmujmvzz5mdm",
                              inStock: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877671",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (2 Eggs)",
                                        default: 1,
                                        id: "52881561",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (4 Eggs)",
                                        price: 10000,
                                        id: "52881562",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021522",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380996",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021521",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021523",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "68 ratings",
                                  ratingCountV2: "68",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607360",
                              name: "Paneer Tikka Biryani              ",
                              category: "Biryani",
                              description: "Serves 1 | 8 pcs for 2 persons.",
                              imageId: "qwwqugw8vu5nqrqigyll",
                              inStock: 1,
                              isVeg: 1,
                              price: 27500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "76021504",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "60895201",
                                      name: "Solkadi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021503",
                                  groupName: "Raita in Biryani",
                                  choices: [
                                    {
                                      id: "60895200",
                                      name: "Raita",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "76021502",
                                  groupName: "Salan in Biryani",
                                  choices: [
                                    {
                                      id: "60895199",
                                      name: "Pandhra Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270725",
                                      name: "Extra Tambda Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895204",
                                      name: "Veg Gravy",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "60895202",
                                      name: "Tambda Rassa",
                                      price: 2000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270724",
                                      name: "Extra Pandhra Rassa",
                                      price: 2500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78380998",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "23 ratings",
                                  ratingCountV2: "23",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Thalis",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942602",
                              name: "Egg Thali",
                              category: "Thalis",
                              description:
                                "Serves 1 | Chapati-2/Roti-2/ Bhakari-2/ Plain Rice.",
                              imageId: "sesyokv5myls6aog1lud",
                              inStock: 1,
                              price: 21000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877697",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati - 3",
                                        default: 1,
                                        id: "52881653",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri - 2",
                                        id: "52881654",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607362",
                              name: "Fish Thali (Surmai)",
                              category: "Thalis",
                              description:
                                "Serves 1 | 2 pcs Surmai tava, Plain curry,  Sukat,  Solkadhi , Chapati or  Bhakari or Rice .",
                              inStock: 1,
                              price: 35000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784289",
                                    name: "Choice of Bread/Rice",
                                    variations: [
                                      {
                                        name: "Chapati",
                                        default: 1,
                                        id: "35494662",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Rice",
                                        id: "35494664",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri",
                                        id: "35494663",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607365",
                              name: "Bangda Thali",
                              category: "Thalis",
                              description:
                                "Serves 1 | Sukat Chautny/ Solkadi/ Chapati-3/Roti-2/ Bhakari-2, Plain Rice.",
                              inStock: 1,
                              price: 24000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877695",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati - 3",
                                        default: 1,
                                        id: "52881649",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri - 2",
                                        id: "52881650",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158130",
                              name: "Butter Chicken Thali",
                              category: "Thalis",
                              description:
                                "Serves 1 | Egg boiled, Chicken Khima/, Chapati-3/Roti-2/ Bhakari-2, Chicken\nBiryani.",
                              inStock: 1,
                              price: 33000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877691",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati - 3",
                                        default: 1,
                                        id: "52881640",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri - 2",
                                        id: "52881641",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158131",
                              name: "Chicken Tikka Thali",
                              category: "Thalis",
                              description:
                                "Serves 1 | Egg boiled, Chicken Khima/Chapati-3/Roti-2/ Bhakari-2,\nChicken Biryani.",
                              inStock: 1,
                              price: 33000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877692",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati - 3",
                                        default: 1,
                                        id: "52881643",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri - 2",
                                        id: "52881644",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158132",
                              name: "Surmai Thali",
                              category: "Thalis",
                              description:
                                "Serves 1 | Sukat Chautny/ Solkadi/ Chapati-3/Roti-2/ Bhakari-2/ Plain Rice.",
                              inStock: 1,
                              price: 39500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877693",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati - 3",
                                        default: 1,
                                        id: "52881645",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri - 2",
                                        id: "52881646",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158134",
                              name: "Prawns Thali",
                              category: "Thalis",
                              description:
                                "Serves 1 | Sukat Chutney+Solkadi+3 Chapati/2 Roti/2 Bhakri+Plain Rice",
                              inStock: 1,
                              price: 39500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877696",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati - 3",
                                        default: 1,
                                        id: "52881651",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri - 2",
                                        id: "52881652",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942596",
                              name: "Chicken Thali (Chicken masala + Egg Masala + Chicken Keema + Biryani + Chapati 3 Nos or Bhakri 2 Nos.)",
                              category: "Thalis",
                              description:
                                "Medium Spicy | Comes with lemon and onion | Serves 1",
                              imageId: "f617glbvkmlychobgwy0",
                              inStock: 1,
                              price: 33000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784318",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati (3 Nos)",
                                        default: 1,
                                        id: "35494722",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri (2 Nos)",
                                        id: "35494723",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                spiceLevel: "MEDIUMSPICY",
                                accompaniments: "Served with lemon and onion",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "54 ratings",
                                  ratingCountV2: "54",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942594",
                              name: "Mutton Thali (Mutton masala + Egg Masala + Mutton Biryani + Keema + Chapati -3 Nos or Bhakri 2 Nos)",
                              category: "Thalis",
                              description: "Serves 1 | (Serves 1)",
                              imageId: "fkcqrohvk88q4t52dnvf",
                              inStock: 1,
                              price: 37000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10785745",
                                    name: "Choice of Bread",
                                    variations: [
                                      {
                                        name: "Chapati - 3",
                                        default: 1,
                                        id: "35501582",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Bhakri - 2",
                                        id: "35501583",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Starters or Kebabs",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607352",
                              name: "Lemon Chicken Grills",
                              category: "Starters or Kebabs",
                              description: "Serves 1",
                              inStock: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78380991",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607410",
                              name: "Chicken Lollipop Dry",
                              category: "Starters or Kebabs",
                              description: "Serves 1",
                              imageId: "fbtbqym2yehnrapodz5e",
                              inStock: 1,
                              price: 22000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784306",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494698",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 16500,
                                        id: "35494699",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381009",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "29 ratings",
                                  ratingCountV2: "29",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607393",
                              name: "Kolhapuri Chicken Fry",
                              category: "Starters or Kebabs",
                              description: "Serves 1",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381011",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942613",
                              name: "Mutton Fry",
                              category: "Starters or Kebabs",
                              description:
                                "Serves 1 | Tender mutton pieces cooked in traditional secret spices and deep fried in oil.",
                              imageId: "nsbuagjvcjklmkejomen",
                              inStock: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78380992",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619416",
                              name: "Mutton Kala Masala Fry",
                              category: "Starters or Kebabs",
                              description: "Serves 1",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381010",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607358",
                              name: "Chicken Lollipop  Masala",
                              category: "Starters or Kebabs",
                              description: "Serves 1",
                              imageId: "kheobekjvtormnvcwi0n",
                              inStock: 1,
                              price: 24000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784288",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        id: "35494660",
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 15000,
                                        id: "35494661",
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381012",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607409",
                              name: "Chicken Rashmi Kebab",
                              category: "Starters or Kebabs",
                              description: "Serves 1",
                              inStock: 1,
                              price: 26000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381008",
                                  groupName: "Beverages in Biryani",
                                  choices: [
                                    {
                                      id: "63270727",
                                      name: "Solkadhi",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Starters",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158098",
                              name: "Paneer Cheese Garlic",
                              category: "Veg Starters",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158099",
                              name: "Paneer Tikka Kebab ",
                              category: "Veg Starters",
                              description: "8 pieces | Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "8 pieces",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158100",
                              name: "Paneer Banjara Kebab ",
                              category: "Veg Starters",
                              description: "8 pieces | Serves 1",
                              imageId: "rcpyjdeacqr9pubxup3n",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "8 pieces",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158101",
                              name: "Paneer Lasooni Kebab",
                              category: "Veg Starters",
                              description: "8 pieces | Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "8 pieces",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158102",
                              name: "Paneer Chilli ",
                              category: "Veg Starters",
                              description: "10 pieces | Serves 1",
                              imageId: "mmolo8dc5b6c6zrhklwv",
                              inStock: 1,
                              isVeg: 1,
                              price: 33000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "10 pieces",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158103",
                              name: "Paneer Manchurian ",
                              category: "Veg Starters",
                              description: "10 pieces | Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "10 pieces",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg (Rice)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942609",
                              name: "Veg Pulao",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "xhzy36sbmft6c44ewz5g",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942616",
                              name: "Paneer Tikka Masala",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "gwvztm1xodfeqgpmxecm",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158104",
                              name: "Veg Biryani                             ",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "qpmalmp79nqta3lbp46t",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "142 ratings",
                                  ratingCountV2: "142",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942618",
                              name: "Paneer Achari Tikka Masala",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.4",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942622",
                              name: "Veg Maratha",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "g0zm0cwipr7uwnav7aze",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942624",
                              name: "Paneer Butter Masala",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "y2dn6uekq4zrctvfbsu2",
                              inStock: 1,
                              isVeg: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942629",
                              name: "Veg Banjara Masala",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942639",
                              name: "Dal Tadka",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "o0oriefdfbejzfwqdcje",
                              inStock: 1,
                              isVeg: 1,
                              price: 18500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607357",
                              name: "Green Peas Masala",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158106",
                              name: "Veg Kolhapuri                                          ",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "buyb3fcdg6d9it7zx7hn",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607361",
                              name: "Dal Fry ",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607363",
                              name: "Paneer Biryani ",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "jczhor3dinzmytnoqoqf",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "96 ratings",
                                  ratingCountV2: "96",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607364",
                              name: "Dal Khichdi",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "cscw5dk4fvsbhccxsqea",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158105",
                              name: "Paneer Maratha",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158107",
                              name: "Paneer Kadai ",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158108",
                              name: "Veg Peshawari",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158109",
                              name: "Veg Kadai",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942610",
                              name: "Masala Papad",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942612",
                              name: "Solkadhi",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              imageId: "no2jmfdm5lqhbygd8mbp",
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "36 ratings",
                                  ratingCountV2: "36",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607366",
                              name: "Paneer Lehsuni Tikka Masala",
                              category: "Veg (Rice)",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 26500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Special Mutton Dish",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942626",
                              name: "Mutton Bheja Fry",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607418",
                              name: "Mutton Maratha ( 6 Pieces )",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607419",
                              name: "Mutton Kasturi ( 6 Pieces )",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607421",
                              name: "Mutton Handi",
                              category: "Special Mutton Dish",
                              description: "Serves 2",
                              imageId: "v3djcht3fd7xrfmpwbra",
                              inStock: 1,
                              price: 38500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784309",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494704",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 29500,
                                        id: "35494705",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 2",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158137",
                              name: "Mutton Fry (6 Pieces )",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158138",
                              name: "Mutton Masala (6 Pcs)",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158139",
                              name: "Mutton Curry (6 Pcs)",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158141",
                              name: "Mutton Rara Masala with Keema ( 5 Pieces )",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607422",
                              name: "Mutton (Vajedi) Fry ",
                              category: "Special Mutton Dish",
                              description: "Serves 1 | for 1 person.",
                              inStock: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158142",
                              name: "Mutton Shahi Masala (5 Pieces )",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158143",
                              name: "Mutton Roghan Josh (5 Pieces )",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158140",
                              name: "Mutton Handi Kala Masala ",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 46000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877699",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (7 Pcs)",
                                        default: 1,
                                        id: "52881657",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (14 Pcs)",
                                        price: 28000,
                                        id: "52881658",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158144",
                              name: "Mutton Alani ( 6 Pcs )",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158135",
                              name: "Mutton Malvani Handi",
                              category: "Special Mutton Dish",
                              description: "Serves 1",
                              inStock: 1,
                              price: 46000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877698",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (6 Pcs)",
                                        default: 1,
                                        id: "52881655",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (14 Pcs)",
                                        price: 28000,
                                        id: "52881656",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Main Course",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942620",
                              name: "Veg Kolhapuri",
                              category: "Veg Main Course",
                              description: "Serves 1",
                              imageId: "buyb3fcdg6d9it7zx7hn",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381034",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381035",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607353",
                              name: "Mix Veg ",
                              category: "Veg Main Course",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381032",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381033",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607359",
                              name: "Paneer Tikka (Dry) ",
                              category: "Veg Main Course",
                              description: "Serves 1",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381030",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381031",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Seafood",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942659",
                              name: "Prawns Fry ( 11 Pieces )",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942663",
                              name: "Prawns Curry ( 10 Pieces)",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 37500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619406",
                              name: "Surmai Fry ",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 34000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942664",
                              name: "Prawns Masala (10 Pieces )",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 37500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619405",
                              name: "Sukat Chutney",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619407",
                              name: "Surmai curry (4 Pcs)",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619408",
                              name: "Bangda Fry ",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619409",
                              name: "Bangda Curry ",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619411",
                              name: "Kolambi Fry ",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619410",
                              name: "Bombil Fry (4 Pieces )",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619412",
                              name: "Kolambi curry ",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158073",
                              name: "Pomfret Fry",
                              category: "Seafood",
                              description: "Serves 1",
                              imageId: "ye794fwgazb9z3basxey",
                              inStock: 1,
                              price: 51500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158074",
                              name: "Prawns Biryani (10 Pieces )",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 40500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619413",
                              name: "Kolambi Masala",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158075",
                              name: "Prawns Kurkure ( 10 Pieces )",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 35000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158076",
                              name: "Prawns Butter Garlic (10 Pieces )",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 41000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619414",
                              name: "Surmai Masala",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 48000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619415",
                              name: "Kolambi Kurkure",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 30000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158072",
                              name: "Surmai New Tawa ",
                              category: "Seafood",
                              description: "Serves 1 | 4pcs for 2 persons.",
                              imageId: "mmtwn6ukccfmgmxctokb",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877669",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (2 Pcs)",
                                        default: 1,
                                        id: "52881557",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (4 Pcs)",
                                        price: 18000,
                                        id: "52881558",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72619404",
                              name: "Surmai Curry",
                              category: "Seafood",
                              description: "Serves 1",
                              inStock: 1,
                              price: 36000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "15877670",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half (2 Pcs)",
                                        default: 1,
                                        id: "52881559",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full (4 Pcs)",
                                        price: 30000,
                                        id: "52881560",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Non Veg Main Corse",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23942628",
                              name: "Mutton Kala Masala",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              inStock: 1,
                              price: 37500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381021",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381022",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607434",
                              name: "Egg Curry ( 2 Eggs)",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              inStock: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381027",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381028",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607424",
                              name: "Chicken Lasooni Masala Boneless",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "vh5hu6pytebpv5jb1lty",
                              inStock: 1,
                              price: 30000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784310",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494706",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 25000,
                                        id: "35494707",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381019",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381020",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158077",
                              name: "Egg Koliwada Fry (2 Eggs )",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              inStock: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381043",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381042",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607351",
                              name: "Special Chicken Ukkad Boneless",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              inStock: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381016",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381015",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607426",
                              name: "Chicken Kala Masala Handi(Half)",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "o9bdywuhfmz05rjdlg56",
                              inStock: 1,
                              price: 31000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784312",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494710",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 20000,
                                        id: "35494711",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381007",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381006",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607427",
                              name: "Kolhapuri Chicken Masala",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "nzfr6x5se41mjxmvt5yg",
                              inStock: 1,
                              price: 25000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381025",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381026",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607428",
                              name: "Chicken Banjara Masala ",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "oeupytbrjygna6fahixt",
                              inStock: 1,
                              price: 34000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784313",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "35494712",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 25500,
                                        id: "35494713",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381023",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381024",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607432",
                              name: "Egg Tawa Masala",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              inStock: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381036",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381037",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607433",
                              name: "Egg Masala ",
                              category: "Non Veg Main Corse",
                              description: "Serves 1 | 2 eggs for 2 persons.",
                              imageId: "bvfhnsbz9ksxd4dvznqz",
                              inStock: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381014",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381013",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "93158078",
                              name: "Egg Boiled (2 Eggs)",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              inStock: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381003",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381002",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607436",
                              name: "Egg Bhurji",
                              category: "Non Veg Main Corse",
                              description: "Serves 1 | (2 Eggs)",
                              inStock: 1,
                              price: 16500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381038",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381039",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607435",
                              name: "Egg Omelette",
                              category: "Non Veg Main Corse",
                              description: "Serves 1 | (2 Eggs)",
                              inStock: 1,
                              price: 16500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381041",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381040",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "EGG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607420",
                              name: "Mutton Keema Fry",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              imageId: "ia2reun4uth7b5i0mluv",
                              inStock: 1,
                              price: 22000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784308",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        id: "35494702",
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 13000,
                                        id: "35494703",
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381018",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381017",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "25 ratings",
                                  ratingCountV2: "25",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607423",
                              name: "Special Mutton Akkad ",
                              category: "Non Veg Main Corse",
                              description: "Serves 1",
                              inStock: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "78381005",
                                  groupName: "Indian Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270726",
                                      name: "Jawar Bhakari",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "78381004",
                                  groupName: "Breads in Curry",
                                  choices: [
                                    {
                                      id: "63270722",
                                      name: "Butter Naan",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "63270723",
                                      name: "Butter Roti",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Combos",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607368",
                              name: "Happy Birthday Combo pack",
                              category: "Combos",
                              description:
                                "Serves 1 | Chicken Lolly POP (12 Pcs) , Chicken Tandoori Full (8pcs) , Special Chicken Biryani 1 kg , Cold Drink or Solkadi (10 Nos). As per availability.",
                              inStock: 1,
                              price: 215000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "10784290",
                                    name: "Choice Of Beverage",
                                    variations: [
                                      {
                                        name: "Cold Drink",
                                        id: "35494665",
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Solkadhi (10 Nos)",
                                        default: 1,
                                        id: "35494666",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72607370",
                              name: "Chicken Combo",
                              category: "Combos",
                              description:
                                "Serves 1 | Chicken Biryani Half, Chicken Kabab-5 pcs, Solkadhi.",
                              inStock: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Late Night Special Combos",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "101979990",
                              name: "Chicken Banjara Kabab + Solkadhi                     ",
                              category: "Late Night Special Combos",
                              description: "Serves 1 | | Minimum Rs. 10 off |",
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "101979995",
                              name: "Chicken Achari Kebab + Solkadhi                     ",
                              category: "Late Night Special Combos",
                              description: "Serves 1 | | Minimum Rs. 10 off |",
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "101979998",
                              name: "Chicken Shole Kabab + Solkadhi                     ",
                              category: "Late Night Special Combos",
                              description: "Serves 1 | | Minimum Rs. 10 off |",
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "101980002",
                              name: "Chicken Seekh Kabab + Solkadhi                     ",
                              category: "Late Night Special Combos",
                              description: "Serves 1 | | Minimum Rs. 10 off |",
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "101980007",
                              name: "Chicken tikka + Solkadhi                     ",
                              category: "Late Night Special Combos",
                              description: "Serves 1 | | Minimum Rs. 10 off |",
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 10 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 11518034001567"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "PK Biryani House (Deccan)",
                      area: "Deccan Gymkhana",
                      completeAddress:
                        "Deccan Gymkhana, Pune, Maharashtra 411004",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
  },
  tid: "d5098f3b-32a9-499d-b515-4b387eac9aba",
  sid: "71p99600-66f5-4841-a9e8-906179d842a4",
  deviceId: "3799c6f7-f8eb-eb0b-8383-806ae2ed9244",
  csrfToken: "iVnMkPtyfAPK-QzRclHItXRkTPHR4wRzwuiugzOs",
};
