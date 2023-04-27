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
    - app.get('product/:id/edit')   [done]
    - edit.ejs with a form pre-populated with the product details       [done]
    - put request handler route     [done]
    - method-override npm package, use it as middleware to
    - in url add ?_method=PUT [done]
    - app.put route     [done]
    - findbyidandupdate(id, req.body, {runValidator: true, new: true})  [done]
    - redirect      [done]
    - edit button      [done]

video 411 - tangent on category selctor
    - dynanic selection options for category  [done]
    - pre-selected value   [done]


video 412 - deleting products
    - fake a delete request from the  details page to /products/id using form with just a single button
    - app.delete route  [done]


video 413 - BONUS: filtering by category
    - products?query=dairy      [done]
    - on the details template add a link to category /products/?query=p.category    [done]
    - in /products and query handling if query exists find products with a specific category, otherwise find all products and render then. pass products and category to the template and finish up any loose ends, like the title of template.    [done]

    [Section finished]


## A few problems in the code:

    - categories are not pre-selected properly on edit.ejs

    - any new vegetable entry in not validated by the models

    - a new category added to js array is not implemented in the mongo model enum previously defined.