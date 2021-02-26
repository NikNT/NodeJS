const http = require ('http')
const fs = require ('fs')
const path = require('path')

const app = http.createServer((req, res) => {

    res.writeHead(200, {

        'Content-Type' : 'text/html'

    })

    /*

    if(req.url === '/'){


        fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, content) => {
    
            if(err)
            {
                throw(err)
            }
    
            res.end(content)
        })
    
    }
    
    else if(req.url === '/contact'){
    
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, content) => {
    
            if(err)
            {
                throw(err)
            }
    
            res.end(content)
    
        })
    
    }

    */ 

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'home.html' : req.url)

    fs.readFile(filePath, (err, content) => {

        if(err) {

            res.writeHead(500)
            res.end('Error!')
            
        }
        else{

            res.writeHead(404, {

                'Content-Type' : 'text/html'

            })

            res.end(content)    
            
        }

    })
 
})



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {

    console.log(`Server Started on Port ${PORT}`)

})