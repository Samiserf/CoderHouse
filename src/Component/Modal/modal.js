const ModalHeader = (props) => (
    <div className="modal-header">
      <button 
        type="button" 
        className="close" 
        data-dismiss="modal">
        &times;
      </button>

      <h4>{props.title}</h4>
    </div>
 );

const ModalBody = (props) => (
    <div className="modal-body">
      {props.content}
      <p>Sample taken from: https://www.w3schools.com/bootstrap/bootstrap_modal.asp</p>
    </div>
 )


const ModalFooter = (props) =>(
    <div className="modal-footer">
      <input 
        type="button" 
        className="btn btn-default" 
        data-dismiss="modal" 
        value={props.footer}
        />
      
      <button 
        type="button" 
        className="btn btn-default" 
        data-dismiss="modal">
        Close
      </button>
    </div>
)

const Modal = (props) =>{
  return(
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader title={props.title} />
            <ModalBody content={props.content}/> 
            <ModalFooter footer={props.footer}/>
          </div>
        </div>
      </div>
    );
}

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.showModal = this.showModal.bind(this);
  }
  
  showModal(){
    //Shows the hidden Modal
    ReactDOM.findDOMNode(this.refs.modal);
  }
  
  render(){
    return(
      <div className="container">
        <h2>Bootstrap Modal Example Using React</h2>
        
        <button 
          onClick={this.showModal} 
          type="button" 
          className="btn btn-info btn-lg" 
          data-toggle="modal" 
          data-target="#myModal">Open Modal
        </button>
        
        <Modal 
          title="Modal Header" 
          content="Modal Content" 
          footer="Save" 
          ref="modal"
          />
        
      </div>
    );
  }
}

ReactDOM.render(<Modal />, document.getElementById("app"));