import React,{useState} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled} from 'react-codemirror2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompressArrowsAlt,faExpandArrowsAlt} from '@fortawesome/free-solid-svg-icons';
function Editor(props){
  const {language,displayName,value,onChange}=props
  function handleChange(editor,data,value){
    onChange(value);
  }
  const [open,setOpen]=useState(true);
  return(
    <div className={`editor-container ${open?'':'collapsed'}`}>
    <div className="editor-title">
    {displayName}
    <button type="button" onClick={()=>{setOpen(!open)}}><FontAwesomeIcon icon={open?faCompressArrowsAlt:faExpandArrowsAlt}/></button>
    </div>
    <Controlled
    onBeforeChange={handleChange}
    value={value}
    className="code-mirror-wrapper"
    options={{lineWrapping:true,lint:true,mode:language,lineNumbers:true,theme:"dracula"}}
    />
    </div>
  )
}
export default Editor;
