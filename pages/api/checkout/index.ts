
import type { NextApiRequest, NextApiResponse } from 'next'

const getPaymentGateWayContent = async (req: NextApiRequest, res: NextApiResponse) => {
  // Commented for now as there is no route for now
  // TODO: create config file and import keys from there
  const { data, message, status } = {
    data: {
      cartItems:[
        {
          image: "/svg/product.png",
          name:"Lifetime Warranty",
          quantity: 1,
          price: "$120.90"
        },
        {
          image: "/svg/product3.png",
          name: "Lifetime Warranty",
          quantity: 1,
          price: "$120.90"
        },
        {
          image: "/svg/product2.png",
          name: "Lifetime Warranty",
          quantity: 1,
          price: "$120.90"
        }
      ],
      addons: {
        title: "Lifetime Warranty",
        description: "Add a lifetime warranty & enjoy peace of mind for life with your dream collections order for just $4.99",
        price: "$4.99"
      }
    },
    message: {
      messaage: "Data fetched successfully!"
    }, status: 200
  }
  res.status(status).json({ data, message })
}

export default getPaymentGateWayContent
