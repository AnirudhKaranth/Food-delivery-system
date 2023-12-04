import Cart from "../Models/Cart.js"
import Food from "../Models/Food.js"
import Order from "../Models/Order.js"
import User from "../Models/User.js"



export const createOrder = async(req, res, next)=>{
    const {userId} = req.user
    const {orderData} = req.body
    
    try {
        orderData.map(async (item)=>{
            await Order.create({Fid:item?.foodId, Rid:item?.Rid, Uid:userId, address:item?.address, phone:item?.phone})

        })
        res.status(201).json({msg:"order placed"})
    } catch (error) {
        next(error)
    }

}

export const updateOrderStatus = async(req, res, next)=>{
    const {userId} = req.user
    const {OrderId} = req.params

try {
        const order = await Order.findOne({where:{id:OrderId}})
    
        if(order.dataValues.Rid !== userId){
            return res.status(200).json({
                msg:"Unauthorized User"
            })
        }
    
        order.status = "done"
        await order.save()

        const orders = await Order.findAll({
          where:{Rid:userId},
          include: [
              {
                model: Food, 
                attributes: ['name', 'price','photo'],
                
              },
              {
                  model: User, 
                attributes: ['name'], 
              }
            ],
      })
    
        res.status(200).json({
           orders
        })
} catch (error) {
    next(error)
}

}

export const getMyOrders =  async(req, res, next)=>{
   try {
     const {userId} = req.params
 
     const orders = await Order.findAll({
        where:{Uid:userId},
        include: [
            {
              model: Food, 
              attributes: ['name', 'price','photo'],
              
            },
            {
                model: User, 
              attributes: ['name'], 
            }
          ],

    })
     res.status(200).json({orders})
   } catch (error) {
    next(error)
   }
}

export const getRestaurantOrders =  async(req, res, next)=>{
   try {
     const {Rid} = req.params
 
     const orders = await Order.findAll({
        where:{Rid},
        include: [
            {
              model: Food, 
              attributes: ['name', 'price','photo'],
              
            },
            {
                model: User, 
              attributes: ['name'], 
            }
          ],
    })
     res.status(200).json({orders})
   } catch (error) {
    next(error)
   }
}



export const addToCart = async(req, res, next)=>{
    const { userId } = req.user
    const {foodId} = req.body
    console.log(foodId)
try {
    const cart = await Cart.create({Uid:userId, Fid:foodId})
    res.status(200).json({cart})
    
} catch (error) {
    next(error)
}

}

export const removeFromCart = async (req, res, next) => {
    const { id } = req.params;
    const {userId} = req.user
    try {

        const oldcart = await Cart.findOne({ where: { id } })
        if (oldcart && oldcart.dataValues.Uid === userId) {
            await oldcart.destroy();
            const cart = await Cart.findAll({
                where:{Uid: userId},
                include: [
                    {
                      model: Food, 
                      attributes: ['name', 'price', 'id', 'Rid','photo'],
                      
                    },
                  ],
            })
             console.log(cart)
             return res.status(200).json({cart})
        } else {
            return res.status(400).json({ msg: "error" })
        }
    } catch (error) {
        next(error)
    }
}

export const getCartByUser = async(req, res, next)=>{
   try {
     const {userId} = req.params
//  console.log(userId)
     const cart = await Cart.findAll({
        where:{Uid: userId},
        include: [
            {
              model: Food, 
              attributes: ['name', 'price', 'id', 'Rid','photo'],
              
            },
          ],
    })
     console.log(cart)
     res.status(200).json({cart})
   } catch (error) {
    next(error)
   }
}