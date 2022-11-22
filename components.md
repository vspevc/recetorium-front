# Data Layer

## Data

- recipeState (object):

  - recipes (array recipe):

    - name: string
    - urlSlug: string
    - authorId: ObjectId-string
    - authorName: string
    - category: "desayuno" | "almuerzo" | "comida" | "cena" | "postre"
    - ingredients: [
      { name: string, quantity: string }
      ]
    - steps: [
      { step: string, order: number }
      ],
    - elaborationTime: string,
    - image: string,
    - createdAt: number (timestamp)

  - recipe (object):

    - name: string
    - urlSlug: string
    - authorId: ObjectId-user-string
    - authorName: string
    - ingredients: [
      { name: string, quantity: string }
      ]
    - steps: [
      { step: string, order: number }
      ],
    - elaborationTime: string,
    - image: string,
    - createdAt: number (timestamp)

- userState (object):

  - isLogged: boolean,
  - userRecipes: [ ObjectId-recipe-string ],
  - favoriteRecipes: [ ObjectId-recipe-string ],
  - scheduledRecipes: [{
    recipeId: ObjectId-recipe-string,
    scheduledDate: number,
    }],

- uiState (object):

  - modal: JSX.Element,
  - isLoading: boolean,
  - isAudioPlaying: boolean,

## Data Modifications

- recipesState:

  - recipes: change every time a new list of recipes is loaded or it's filtered.
  - recipe: is set when on detail page or update recipe.

- userState:

  - isLogged: only true when it have a valid jwt.
  - userRecipes: add one id to the list after creating successfully a new recipe to the database or remove one after delete it from database.
  - favoriteRecipes: add one id every time the user mark a new favorite recipe on database or remove it when dismark favorite recipe from database.
  - scheduledRecipes: add, remove or update when it's modified by the user.

- uiState:

  - modal: set content when a modal is loaded and empty when the modal is closed.
  - isLoading: true before a connection with the API, false after get the API response.
  - isAudioPlaying: true when play audio button is clicked, false when stop button is clicked or when the audio finish.

# Components

## App

### Show Data

- Header
- Depends on page:
  - Home - RecipeList
  - Register - RegisterForm
  - Login - LoginForm
  - Your-Recipes - RecipeList
  - Favorite-Recipes - RecipeList
  - Scheduled-Recipes - RecipeList
  - Recipe-Detail - RecipeDetail
  - Create-Recipe - RecipeForm
  - Update-Recipe - RecipeForm
  - Not-found - NotFound

## Header

### Show Data

- A Title with "Recetorium"
- A MainNavigation component

## MainNavigation

### Show Data

- mobile

  - A Button component with a burger icon
  - A list of links in column display

- desktop

  - A list of lonks in row display

### Get Actions

- On mobile view switch menu when click on button menu

## RecipeList

### Show Data

- A list of 8 RecipeCard component
- A Pagination component

### Get Actions

- Provide previous/next buttons with previous/next navigate to page action

## RecipeCard

### Show Data

- unregistered:

  - An img tag with recipe image
  - An heading with the received level with the recipe name
  - A list of recipe type
  - An hourglass icon with the recipe elaboration time

- registered another user recipe, the same as unregistered and:

  - A Button component make recipe with the provided children "Hacer receta"+calendar icon
  - A Button component with a heart icon on it

- registered the user's recipe, the same as registered another user recipe:

  - A Button component round with trash icon over the image
  - A button component with children "Editar"

### Get Actions

- Open ConfirmDeleteModal to delete the user recipe with trash/delete button
- Open MakeRecipeModal with make recipe button
- Add or remove recipe from user favorites recipes
- Navigate to Edit user recipe
- Navigate to recipe detail when click on image or title

## RegisterForm

### Show Data

- An Input component with type "text", label "Nombre de usuario" and caption "Debe tener entre 3 y 30 caracteres alfanuméricos"
- An Input component with type "email" and label "Email"
- An Input component with type "pasword", label "Contraseña" and caption "Debe tener entre 8 y 30 caracteres alfanuméricos y símbolos"
- A Button component with children "Registrarse"

### Get Actions

- Send a register with user data request to API

## LoginForm

### Show Data

- An Input component with type "text" and label "Nombre de usuario"
- An Input component with type "pasword" and label "Contraseña"
- A Button component with children "Acceder a Recetorium"

### Get Actions

- Send login with user data request to API

## RecipeForm

### Show Data

- A heading level 2 with the received text
- An Input component providing type "text", label "Nombre de la receta" and if updating recipe a value with the recipe name.
- A list of 5 checkbox with labels "desayuno", "almuerzo", "comida", "cena", "postre"
- An Input component providing type "text", label "Tiempo de elaboración", caption "Por ejemplo: 15 min, 1h 30 min..." and if updating recipe a value with the elaboration time.
- An ImageInput component if updating a recipe providing the value and imageSource with image.
- A heading level 3 with "Ingredientes"
- If some ingredient already introduced, for each one, an InteractiveInput component with the provided ingredient quality and name.
- An Input component providing type "text", label "Nombre de ingrediente" and if updating recipe a value with the ingredient name.
- An Input component providing type "text", label "Cantidad", caption "Por ejemplo: 1, 100gr, 10ml..." and if updating recipe a value with the ingredient quantity.
- A Button component with the provided children "Añadir"
- A heading level 3 with "Paso a paso"
- If some step already introduced, for each one, an InteractiveInput component with the provided step order and step
- A TextBox component
- A Button component with the provided children "Añadir paso"
- A Button component with the received text

### Get Actions

- Provide InteractiveInput component with an action to edit the index from ingredients array
- Provide InteractiveInput component with an action to delete the index from ingredients array
- Add ingredient will add the ingredient to ingredients array and show a new InteractiveInput for the ingredient
- Provide InteractiveInput component with an action to edit the index from steps array
- Provide InteractiveInput component with an action to delete the index from steps array
- Add step will add the step to steps array and show a new InteractiveInput for the step
- A submit action that send the recipe data to de received custom hook function

## TextArea

### Show Data

- A label with the received text
- An input with the received input type and may receive a input text

### Get Actions

- invoke a funtion on input change

## InteractiveInput

### Show Data

- The received ingredient quantity and name
- A Button component with the provided edit icon and aria-label "Editar ingrediente"
- A Button component with the provided delete icon and aria-label "Eliminar ingrediente"

### Get Actions

- Invoke the action received for edit Button
- Invoke the action received for delete Button

## ImageInput

### Show Data

- An img tag with the default image or with the received imageSource.
- An Input component providing type "file", label "Seleccionar imagen".
  - The input not visible and the label as Button component with isFullWidth

### Get Actions

- Change image src on file load.
- Invoke the received action on change

## Input

### Show Data

- A label with the received text
- An input with the received input type and may receive a input text and/or input icon
- A small caption for hints or error with the received text

### Get Actions

- invoke a funtion on input change

## Modal

### Show Data

- The received modal content

### Get Actions

- closeModal when click on background

## FeedbackModal

### Show Data

- A heading level 2 with the received text with color red or green by the received isError
- A paragraph with the received text
- A button with the provided "Salir" text

### Get Actions

- Provide the button with the closeModal action

## Button

### Show Data

- The received tag as a button styled with the received children content, it may also receive a variant and isFullWidth.

### Get Actions

- Invoke the received action on click.
