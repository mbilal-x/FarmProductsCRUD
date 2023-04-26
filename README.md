# FarmProductsCRUD

### This is a practice CRUD project in mongo 
## Packages Used: 
- ejs
- mongoose
- express
- nodemon



progress: udemy course  

video 409 - creating products
    - make a /product/new route to get new product from form.   [done]
    - make a post handler /products route   [done]
    - app.use(express.urlencoded({extended: true})) for parsing post body   [done]
    - new product(req.body)     [done]
    - no validations yet    [done]
    - finished   [done]

video 410 - updating products
    - app.get('product/:id/edit')
    - edit.ejs with a form pre-populated with the product details
    - put request handler route
    - method-override npm package, use it as middleware to
    - in url add ?_method=PUT
    - app.put route
    - findbyidandupdate(id, req.body, {runValidator: true, new: true})
    - redirect
    - edit button

video 411 - tangent on category selctor

    - dynanic selection options for category
    - pre-selected value


video 412 - deleting products
    - fake a delete request from the  details page to /products/id using form with just a single button
    - app.delete route


video 413 - filtering by category
    - 