import React from 'react';
import Results from "./Results";
import wiki from "./files/wiki.png";


class App extends React.Component{

  state = {
    title:"No search results",
    data:[]
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const userSearch = e.target.elements.userSearch.value;
    const url =`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${userSearch}&format=json&callback?`;

    fetch(url)
    .then((data) => {
      return data.json()
    })
    .then(response => {
      let results=[]
      for (let i = 0; i < response[1].length; i++) {
           results.push({title:response[1][i],description:response[2][i],link:response[3][i]})     
      }
        
      this.setState({title:response[0], data:results})
        
    })
    .catch(error => {
      console.log(`"error" ${error}`)
    })
    


  }
      // results.innerHTML = `<li>${response[1]}</li>`;
      // results.innerHTML = `<li>${response}</li>`;
      // console.log(results.innerHTML = `<li>${response}</li>`);
    // })
    // .catch((error) => {
    //   console.log("errorrororo" + error)
    // })
    // alert(userSearch);

  makelist = () => {
    let results = this.state.data.map((data,key) => {
      return <Results key={key} data={data}/>
    })

    return results;
  }

  render(){
    return (
      <div className="container-fluid">
        <h1 className="text-center display-3 font-weight-bold">Wikipedia Viewer -<i className="fa fa-wikipedia-w" aria-hidden="true"></i>-</h1>      
        <img src={wiki} className="wikiImg img-responsive mx-auto d-block" alt="Wiki"  />
  
        <form onSubmit={this.handleSubmit}>
          <div className="text-center " id="searchInfo">    
            <input name="userSearch" id="userSearch" type="text" placeholder="Search..." />
            <button className="btn btn-primary " ><i className="fa fa-search"></i></button>   
          </div>
        </form>

        <div className="container text-center" >
              You Searched: {this.state.title.toLocaleUpperCase()}
              
              { this.makelist() }
        </div>
        <div className="text-center mt-5">
          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer"><button type="submit">Random Wiki</button></a>
          <p>Made by <a href="https://lilnop.github.io/lilnop/" target="_blank" rel="noopener noreferrer"><span className="italic">Robert Sarpong</span></a></p>
        </div>
  
      </div>
    );
  }
} 

  
  

export default App;



        // description:response[2].map(result2 => {
        //   return <Results description={result2} />
        // })