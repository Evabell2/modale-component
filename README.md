# simple-component-libraryA library of React components created using `create-react-app`.

## InstallationRun the following command:`npm install modale-component`

### Then use the Modale component like this :
   
`const [displayModale, setDisplayModale] = useState(false)`

`const handleDisplayModale = () => {setDisplayModale(!displayModale)}`

`<Modale display={displayModale} setDisplayModale={handleDisplayModale} text="texte" />`