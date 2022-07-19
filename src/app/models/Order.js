import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    status: {
        type: String
    },
    customer: {
        _id: {
            type: String
        },
        name: {
            type: String
        },
        doc: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        }
    },
    seller: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        email: {
            type: String
        }
    },
    payment: {
        amount: {
            type: Number
        },
        id: {
            type: String
        },
        discount: {
            type: Number
        },
        status: {
            type: String
        },
        method: {
            type: String
        },
        installments: {
            type: Number
        },
        date: {
            type: Date
        }
    },
    resume: {
        amount: {
            type: Number
        },
        original_amount: {
            type: Number
        },
        products_amount: {
            type: Number
        },
    },
    delivery: {
        address: {
            type: Object,
            line1: {
                type: String
            },
            line2: {
                type: String
            },
            line3: {
                type: String
            },
            neighborhood: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String
            },
            postal_code: {
                type: String
            },
            country_code: {
                type: String
            }
        },
        track_url: {
            type: String
        },
        status: {
            type: String
        },
        track_id: {
            type: String
        },
        type: {
            type: String
        },
        amount: {
            type: Number
        },
        delivery_forecast: {
            type: Date
        },
        history: {
            type: Array,
            address: {
                type: Object,
                line1: {
                    type: String
                },
                line2: {
                    type: String
                },
                line3: {
                    type: String
                },
                neighborhood: {
                    type: String
                },
                city: {
                    type: String
                },
                state: {
                    type: String
                },
                postal_code: {
                    type: String
                },
                country_code: {
                    type: String
                }
            },
            track_url: {
                type: String
            },
            status: {
                type: String
            },
            track_id: {
                type: String
            },
            type: {
                type: String
            },
            amount: {
                type: Number
            },
            delivery_forecast: {
                type: Date
            },
        }
    },
    products: {
        type: Array,
        id: {
            type: String
        },
        seller_id: {
            type: String
        },
        product_seller_id: {
            type: String
        },
        name: {
            type: String
        },
        coupon: {
            id: {
                type: String
            },
            code: {
                type: String
            },
            name: {
                type: String
            },
            discount: {
                type: Number
            },
            type: {
                type: String
            }
        },
        quantity: {
            type: Number
        },
        sku: {
            type: String
        },
        status: {
            type: String
        },
        image: {
            type: String
        },
        amount: {
            type: Number
        },
        total: {
            type: Number
        }
    },
}, {
    timestamps: true
});

export default mongoose.model('Order', OrdersSchema);