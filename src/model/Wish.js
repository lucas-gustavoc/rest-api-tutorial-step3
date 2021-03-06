/*
    This is the import of the tool we will be using to
    fake IDs for our registers.
*/
const uniqid = require('uniqid')

/*
    This is a basic JavaScript class which handles our
    fake wishes database. For more informations on JS
    classes, please visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/
class Wish {

    static wishes = []

    // tested
    static create(wish) {
        if (Wish.validate(wish)) {
            wish.id = uniqid()
            Wish.wishes.push({ 
                id: wish.id, 
                wish: wish.wish, 
                priority: wish.priority, 
                userId: wish.userId 
            })
            return wish
        } else {
            return undefined
        }
    }

    // tested
    static validate(wish) {
        let valid = true
        if (!wish.wish) valid = false
        if (!wish.priority) valid = false
        if (!wish.userId) valid = false
        return valid
    }

    // tested
    static getAll() {
        return Wish.wishes
    }

    // tested
    static getOne(id) {
        const wish = Wish.wishes.find(item => item.id == id)
        return wish
    }

    static getAllOfOneUser(userId) {
        return Wish.wishes.filter(item => item.userId == userId)
    }

    // tested
    static patch(id, patches) {
        const wishToPatch = Wish.getOne(id)
        if (wishToPatch) {
            if (patches.wish) wishToPatch.wish = patches.wish
            if (patches.priority) wishToPatch.priority = patches.priority
            
            const wishIndex = Wish.wishes.findIndex(item => item.id == id)
            Wish.wishes[wishIndex] = wishToPatch
            return wishToPatch
        } else {
            return undefined
        }
    }

    // tested
    static delete(id) {
        const wishIndex = Wish.wishes.findIndex(item => item.id == id)
        if (wishIndex > -1) {
            Wish.wishes.splice(wishIndex, 1)
            return { message: 'Wish deleted successfully!' }
        } else {
            return undefined
        }
    }
}

/*
    Here we are exporting the class we just created, so
    it can be imported inside other files.
*/
module.exports = Wish