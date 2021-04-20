import React, {PureComponent} from 'react';
import './styles/mobweb.css';
import {RiArrowDownSFill, RiEqualizerFill} from 'react-icons/ri';
import apiData from 'axios';
import {Link} from 'react-router-dom';
import portal from 'react-dom';
import Privacy from './privacy';

var row, btnType = 'radio', count=0, phone, counter=0, counter = [[], [], []], op = [[], [], []], opt = [[], [], []];
var data, shotHand, bigForm, formContent, index, tit;
for(var i=0;i<3;i++) {
    for(var j=0;j<4;j++) {
        counter[i][j]=op[i][j]=opt[i][j]=0;
    }
}
class calc extends PureComponent {
    constructor() {
        super();

        this.state = {
            selector: '',
            codesData: '',
            flag: '',
            phone: '',
            check: '',
            accept: '',
            openPrivacy: ''
        }
    }

    addCode = (phoneCode, countryCode) => {

        phone.value = phoneCode;

        this.setState({
            flag: <img src={`https://www.countryflags.io/${countryCode}/flat/64.png`} style={{width: '24px', marginLeft: '-5px'}}/>
        })

        this.setState({
            selector: ''
        })
        count=0;
    }

    openCodes = () => {
        var data = this.state.codesData.data;
        if(count%2==0) {
            this.setState({
                selector: <div className='c-code'>
                            {
                                data.map(list => {
                                    return <p onClick={() => this.addCode('+'+list.callingCodes[0]+' ', list.alpha2Code)} className='c-dataList'><img src={`https://www.countryflags.io/${list.alpha2Code}/flat/64.png`} style={{width: '24px', margin: '2px 2px -5px 2px'}}/> {list.name} +{list.callingCodes[0]}</p>
                                })
                            }
                        </div>
            })
        }
        else {
            this.setState({
                selector: ''
            })
        }
        count++;
    }

    componentDidMount() {
        phone = document.getElementById('feild5');
        phone.value = '+91 ';

        for(var i=0;i<Object.keys(shotHand).length;i++) {
            if(i==1 || i==3 || i==10 || i==11 || i==12) shotHand[Object.keys(shotHand)[i]] = []
            else shotHand[Object.keys(shotHand)[i]] = ''
        }

        this.setState({
            flag: <img src='https://www.countryflags.io/in/flat/64.png' style={{width: '24px', marginLeft: '-5px'}}/>
        })

        apiData.get('https://restcountries.eu/rest/v2/all')
                .then(res => {
                    this.setState({
                        codesData: res
                    })
                })
                .catch(err => console.log(err))
    }

    taken = (event, title, content) => {

        index = bigForm.indexOf(title);
        tit = Object.keys(shotHand);

        if(event.target.checked) {
            if(event.target.type === 'radio') {
                shotHand[tit[index]] = content
            }
            else if(event.target.type === 'checkbox') {
                if(!shotHand[tit[index]].includes(content)) {
                    shotHand[tit[index]].push(content)
                }
            }
        }
        else if(!event.target.checked) {
            if(event.target.type === 'checkbox') {
                if(shotHand[tit[index]].includes(content)) {
                    shotHand[tit[index]].splice(shotHand[tit[index]].indexOf(content), 1)
                }
            }
        }
    }

    pushForm = (event) => {
        event.preventDefault();

        this.setState({phone: '', check: '', accept: ''})

        var pass = true;

        for(var i=0;i<=6 ;i++) {
            var inp = document.getElementById('feild'+i);
            console.log(inp.checkValidity())
            var alert = document.getElementById('inp-alert'+i);
            alert.innerHTML = '';
            if(!inp.checkValidity()) {
                alert.innerHTML = 'Please fill out this feild'
                pass = false;
            }
        }

        if(pass) {

            if(document.getElementById('feild5').value.length <= 7) {
                this.setState({
                    phone: <div className='c-alert' style={{marginLeft: '19px'}}>Enter a valid Phone number</div>
                })
            }

            else if(!document.getElementById('check').checked) {
                this.setState({
                    check: <div className='c-alert'>Check the box</div>
                })
            }

            else {
                var feilds = [], i;
                for(i=0;i<11;i++) {
                    feilds[i] = document.getElementById('feild'+i);
                }

                var keys = Object.keys(shotHand), y=data.length;

                for(i=y;i<Object.keys(shotHand).length;i++) {
                    shotHand[keys[i]] = feilds[i-y].value;
                }
                
                for(i=7;i<10;i++) {
                    if(feilds[i].checked) {
                        shotHand['start'] = document.getElementById('f-content'+(i-7)).innerHTML;
                        break;
                    }
                }

                console.log(shotHand);
                apiData.post('http://localhost:4000/options', shotHand)
                        .then(response => response.data)
                        .then(value => {
                            this.setState({
                                accept: <div className='c-alert' style={{color: 'rgb(82, 226, 113)', textAlign: 'center'}}>Request accepted</div>
                            })
                        })
                        .catch(err => {
                            this.setState({
                                accept: <div className='c-alert'>Unable to process request please try again</div>
                            })
                        })
            }
        }
    }

    removeState = (y, x, title) => {

        var final = document.getElementById('opt'+y+''+x+'');
        final.className = 'cc-box green';
        var titles;

        index = bigForm.indexOf(title);
        tit = Object.keys(shotHand)
        data.forEach(val => {
            if(val[title]) titles = val[title]
        })

        for(var i=0;i<x;i++) {
            opt[y][i] = document.getElementById('options'+(y+11)+''+(x+1)+'');
            opt[y][i].checked = false;

            if(shotHand[tit[index]].includes(titles[i])) {
                shotHand[tit[index]].splice(shotHand[tit[index]].indexOf(titles[i]), 1)
            }

            op[y][i] = document.getElementById('opt'+y+''+i+'');
            op[y][i].className = 'cc-box';
            counter[y][i]=0;
        }

        shotHand[tit[index]].push('None')
    }

    changeState = (i,j,x, title, content) => {
        var final = document.getElementById('opt'+i+''+x+'');
        final.className = 'cc-box';

        op[i][j]=document.getElementById('opt'+i+''+j+'');

        index = bigForm.indexOf(title);
        tit = Object.keys(shotHand);

        if(shotHand[tit[index]].includes('None')) {
            shotHand[tit[index]].splice(shotHand[tit[index]].indexOf('None'), 1)
        }

        if(counter[i][j]%2==0) {
            if(!shotHand[tit[index]].includes(content)) {
                shotHand[tit[index]].push(content)
            }
            op[i][j].className = 'cc-box green';
        }
        else {
            if(shotHand[tit[index]].includes(content)) {
                shotHand[tit[index]].splice(shotHand[tit[index]].indexOf(content), 1)
            }
            op[i][j].className = 'cc-box';
        }
        counter[i][j]++;
    }

    remove = () => {
        this.setState({
            openPrivacy: ''
        })
    }

    sendName = (name) => {
        this.setState({
            openPrivacy: portal.createPortal(
                                <Privacy close={this.remove} format={name}/>,
                            document.getElementById('privacy-pop')
                        )
        })
    }

    render() {
        row = 0;
        data=this.props.data;
        bigForm=this.props.form;
        shotHand=this.props.shot;
        formContent=this.props.formText;

        return <React.Fragment>
            {this.state.openPrivacy}
            <div className="width">
                <div className='technologies'>
                    <div className='c-title'>
                        <div className='c-quiz'>
                            <p className='c-ques'>Have an idea for a mobile app?</p>
                            <p className='c-ans'>Answer the questionnaire to estimate the app idea, see the price of your future app and get started with the development.</p>
                        </div>
                    </div>
                    <form>
                    <div className='c-list'>
                        {
                            data.map((heading, ro) => {
                                
                                return <React.Fragment>
                                            <div className='c-left'>
                                                <div className='c-header'>{Object.keys(heading)[0]}</div>
                                            </div>
                                            <div className='c-right'>
                                                <div className='c-boxes'>
                                                    {
                                                        Object.keys(heading).map(values => {
                                                            row++;
                                                            return heading[values].map((content, column) => {
                                                                btnType = 'radio';
                                                                if(row==2 || row==4 || row==11 || row==12 || row==13) btnType='checkbox';

                                                                if(row==11 || row==12 || row==13) {
                                                                    
                                                                    if(column === heading[values].length-1) {
                                                                        return <React.Fragment>
                                                                                <input type={btnType} key={row} id={"options"+row+""+(column+1)+""} // 12 4
                                                                                    name={'featured'+row} className='label-radio' 
                                                                                />
                                                                                <label for={"options"+row+""+(column+1)+""} className='cc-box'
                                                                                    id={'opt'+(row-11)+''+column+''} onClick={() => this.removeState(ro-10, column, values)}> {/* 1 3 */}
                                                                                    <p className='c-name'>{content}</p>
                                                                                </label>
                                                                            </React.Fragment>
                                                                    }
                                                                    else {
                                                                        return <React.Fragment>
                                                                                <input type={btnType} key={row} id={"options"+row+""+(column+1)+""} 
                                                                                    name={'featured'+row} className='label-radio' 
                                                                                />
                                                                                <label for={"options"+row+""+(column+1)+""} className='cc-box'
                                                                                    id={'opt'+(row-11)+''+column+''} onClick={() => this.changeState(ro-10, column, heading[values].length-1, values, content)}>
                                                                                    <p className='c-name'>{content}</p>
                                                                                </label>
                                                                            </React.Fragment>
                                                                    }
                                                                }
                                                                else {
                                                                    return <React.Fragment>
                                                                                <input 
                                                                                    type={btnType} key={row} id={"options"+row+""+(column+1)+""} 
                                                                                    name={"featured"+row} className='label-radio' 
                                                                                    onClick={(event) => this.taken(event, values, content)} 
                                                                                />
                                                                                <label for={"options"+row+""+(column+1)+""} className='c-box'>
                                                                                    <p className='c-name'>{content}</p>
                                                                                </label>
                                                                            </React.Fragment>
                                                                }
                                                                        
                                                            })
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </React.Fragment>
                                        
                            })
                        }
                    </div>
                    <div className='form-part'>
                        <div className='form-title'>
                            <p className='c-ques'>Almost Done!</p>
                            <p className='c-ans'>Let us know where we should send your complete estimation</p>
                        </div>
                        <div className='c-inputs'>
                            {
                                formContent.map((placeHolder, key) => {
                                    return <React.Fragment>
                                            <div>
                                                <input name={placeHolder} className='c-input' id={'feild'+key} placeholder={placeHolder+' *'} required/>
                                                <div className='c-alert' style={{marginLeft: '18px'}} id={'inp-alert'+key}></div>
                                            </div>  
                                       </React.Fragment>
                                })
                            }
                            <div>
                                <span onClick={this.openCodes} className='c-flag'>
                                    {this.state.flag}
                                    <RiArrowDownSFill style={{marginTop: '5px', position: 'absolute'}}/>
                                </span>
                                <input className='c-input1' id='feild5' required/><br/>
                                <div className='c-alert' id={'inp-alert5'}></div>
                                {this.state.selector}
                                {this.state.phone}
                            </div>
                            
                        </div>
                    </div>
                    <div className='ads'>
                        <div>
                            <textarea className='c-input c-textarea' id='feild6' placeholder='Provide us with some information about your project' required/>
                            <div className='c-alert' style={{marginLeft: '18px'}} id={'inp-alert6'}></div>
                        </div>
                    </div>
                    <div className='c-final'>
                            <p className='c-ques-options'>When Would you like to start?</p>
                            <div>
                                <p className='radio'>
                                    <input type="radio" id="feild7" name="featured" className='c-sel'/>
                                    <label for="feild7" className='sel-label' id='f-content0'>Within the next few weeks</label>
                                </p>
                                <p className='radio'>
                                    <input type="radio" id="feild8" name="featured" className='c-sel'/>
                                    <label for="feild8" className='sel-label' id='f-content1'>Within the next few months</label>
                                </p>
                                <p className='radio'>
                                    <input type="radio" id="feild9" name="featured" className='c-sel'/>
                                    <label for="feild9" className='sel-label' id='f-content2'>I dont't know</label>
                                </p>
                            </div>
                            <div class="boxes">
                                <div className='c-caround'></div>
                                <input type="checkbox" className='c-cbox' id='check'/>
                                <label className='c-clabel' for="check">
                                    <span style={{color: 'rgb(216, 89, 89)'}} onClick={() => this.sendName('Privacy Policy')}>By submitting your form, you agree to the Privacy Policy</span>
                                </label>
                                <div>{this.state.check}</div>
                            </div>
                            <button className='calc-btn' onClick={(event) => this.pushForm(event)}>Click to get your free quote</button>
                        </div>
                        <div style={{textAlign: 'center'}}>{this.state.accept}</div>
                    </form>
                </div> 
            </div>
        </React.Fragment>
    }
}

export default calc;