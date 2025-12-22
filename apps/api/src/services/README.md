# Business central Logic

Creating Business logic of microfinnace service app

Controller = HTTP
Service = Business logic

# controller
const user = await userService.createUser(data)

# service
 handles rules, validations, DB calls

# Points

✔ Easier testing
✔ Clean controllers
✔ Microservices-ready