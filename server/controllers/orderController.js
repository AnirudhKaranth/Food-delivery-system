import Cart from "../Models/Cart.js"
import Food from "../Models/Food.js"
import Order from "../Models/Order.js"



export const createOrder = async(req, res, next)=>{
    const {userId} = req.user
    const {foodId, Rid, address, phone} = req.body
    try {
        const order = await Order.create({Fid:foodId, Rid, Uid:userId, address, phone})
        res.status(201).json({order})
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
    
        res.status(200).json({
            msg: "updated successfully"
        })
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