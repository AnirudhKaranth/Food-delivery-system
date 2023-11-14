import Food from '../Models/Food';


export const addFood = async(req, res, next)=>{
    const{name, description, price, category} = req.body
    const { userId } = req.user

    try {
        const foodExists = await Food.findOne({ where: { name, Rid:userId } })
        
        if(foodExists){
            return res.status(400).json({msg: "This food already exists" })
        }
    
        const food = await Food.create({
            name,
            description,
            price,
            category,
            Rid: userId
         })
        
         res.status(201).json({
            food
         })
    } catch (error) {
        next(error)
    }
    

    

}
