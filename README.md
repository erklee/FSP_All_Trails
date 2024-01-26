# SomeTrails

## Introduction

SomeTrails is an interactive web application inspired by All Trails, designed for outdoor enthusiasts to discover and review hiking trails. Using the tools of React and Redux on the frontend and Ruby on Rails and PostgreSQL on the backend, SomeTrails offers an engaging platform for users to explore trail information and share their experiences.

[**Live Site**](https://sometrails-bhz9.onrender.com)

## Technologies Used
- **Languages**: Ruby, JavaScript, HTML, CSS
- **Frontend**: React-Redux
- **Backend**: Ruby on Rails
- **Database**: PostgreSQL
- **APIs**: Google Maps
- **Storage**: AWS S3
- **Hosting**: Render

## MVPs


### Feature: Error Handling

- **State Management with React Hooks**: `useState` is ued for handling user input and error messages. This approach keeps our component state localized and easily manageable.

- **Integration with Redux**: The `useDispatch` and `useSelector` hooks from Redux enable us to dispatch actions — like user login — and access the Redux store to check if a user is already logged in.

- **Navigation Guard**: On a successful login the user is redirected to the splash page. This is implemented using React Router's `<Navigate>` component.

- **Error Handling**: The error handling is used to ensure that the users are able to see clear issues when it comes to account creation.

```javascript

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text(); 
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    ...
  )
}

  ```

### Feature: Google Maps Integration

- SomeTrail enhances user experience by allowing them to see a preview list of trails as well as a visual location of each trail.

```javascript

function TrailsMapWrapper({ trails }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
    
    })

    if (!isLoaded) {
        return <p>Loading</p>
    }

    if (!trails) {
        return null;
    }

    return (
        ...
    )
}

export const TrailsMap = ({trails}) => {

    if (!trails) {
        return null
    }

    const pin = { url: mapPin }

    const mapContainer = {
        width: '100%',
        height: '100%',
        position: 'absolute'
    }

    const center = ({lat: 40.78585773023068, lng: -73.46763094030253})

    return (
        ...
    )
}



```


### Feature: Creating and Updating Reviews

- If a user decides that their review is unsatisfactory to them after submission they have the option to change or delete their review. 

```ruby
# Updates an existing review
def update
  @review = Review.find_by(id: params[:id])
  if @review.user_id == current_user.id && @review.update(review_params)
    render :show 
  else 
    render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
  end
end

# Allows for the deletion of a user's review
def destroy
  @review = Review.find_by(id: params[:id])
  if @review && @review.user_id == current_user.id
    @review.destroy
    render json: { message: 'Review deleted successfully' }
  else
    render json: { errors: 'Invalid action' }, status: :unauthorized
  end
end

```

