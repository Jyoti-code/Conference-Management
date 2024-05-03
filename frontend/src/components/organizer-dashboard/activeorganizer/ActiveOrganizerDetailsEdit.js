import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function ActiveOrganizerRegister() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        conference_category: '',
        name_of_conference: '',
        conference_theme: '',
        from_date: '',
        to_date: '',
        name_of_venue: '',
        address_of_venue: '',
        city: '',
        country: '',
        name_of_organizer: '',
        contact_person: '',
        contact_number: '',
        email: '',
        website: ''
    });

    useEffect(() => {
        const fetchOrganizerDetails = async () => {
            try {
                const response =
                    await axios.get(`http://127.0.0.1:8000/api/organizerDetailsEdit/${id}`);
                setFormData(response.data.organizerlistdetailsedit);
            } catch (error) {
                console.error('Error fetching organizer details:', error);
            }
        };
        fetchOrganizerDetails();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/organizerDetailsUpdate`, formData);
            console.log(response.data);
            setSuccessMessage('You are updated successfully!');
            setTimeout(() => {
                navigate('/conferences-active-list');
            }, 2000);
        } catch (error) {
            setErrorMessage('Invalid response format');
            console.error('Error updating organizer details:', error);
        }
    };
    return (
        <div className='container mt-3'>
            <div className="col-12">
                {successMessage && (
                    <div className="alert alert-success mt-3" role="alert">
                        {successMessage}
                        <button type="button" className="close" onClick={() => setSuccessMessage(null)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
                {errorMessage && (
                    <div className="alert alert-danger mt-3" role="alert">
                        {errorMessage}
                        <button type="button" className="close" onClick={() => setErrorMessage(null)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
            </div>
            <div className='card' style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 8px 10px rgba(0,0,0,0.1)', borderColor: '#fff' }}>
                <div className='card-body'>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="clearfix"></div>
                        <h3 className='h3 mb-0 text-gray-800 d-flex justify-content-center'>Conference Details Edit</h3>

                        <label>Conference Category <span style={{ color: '#F00' }}>*</span></label>
                        <select name="conference_category" id="conference_category" className="form-control input-lg mb-3" required onChange={handleChange} value={formData.conference_category}
                        >
                            <option value="">Select</option>
                            <option value="52-Nanotechnology">Nanotechnology</option>
                            <option value="51-Human Resources">Human Resources</option>
                            <option value="50-Banking and Finance">Banking and Finance</option>
                            <option value="49-Engineering">Engineering</option>
                            <option value="48-Renewable Energy">Renewable Energy</option>
                            <option value="47-Artificial Intelligence">Artificial Intelligence</option>
                            <option value="46-Robotics">Robotics</option>
                            <option value="45-Computer Science">Computer Science</option>
                            <option value="44-Electronics and Electrical">Electronics and Electrical</option>
                            <option value="43-Sports">Sports</option>
                            <option value="42-Water">Water</option>
                            <option value="41-Meteorology">Meteorology</option>
                            <option value="40-Astronomy">Astronomy</option>
                            <option value="39-Oceanography">Oceanography</option>
                            <option value="38-Philosophy">Philosophy</option>
                            <option value="37-Religious Studies">Religious Studies</option>
                            <option value="36-Poetry">Poetry</option>
                            <option value="35-Psychology">Psychology</option>
                            <option value="34-Literature">Literature</option>
                            <option value="33-Politics">Politics</option>
                            <option value="32-Anthropology">Anthropology</option>
                            <option value="31-Arts">Arts</option>
                            <option value="30-History">History</option>
                            <option value="29-English">English</option>
                            <option value="28-African Studies">African Studies</option>
                            <option value="27-American Studies">American Studies</option>
                            <option value="26-European Studies">European Studies</option>
                            <option value="25-Asian Studies">Asian Studies</option>
                            <option value="24-Earth Sciences">Earth Sciences</option>
                            <option value="23-Culture">Culture</option>
                            <option value="22-Tourism">Tourism</option>
                            <option value="21-Spirituality">Spirituality</option>
                            <option value="20-Agriculture">Agriculture</option>
                            <option value="19-Statistics">Statistics</option>
                            <option value="18-Life Sciences">Life Sciences</option>
                            <option value="17-Medicine and Medical Science">Medicine and Medical Science</option>
                            <option value="16-Law">Law</option>
                            <option value="15-Business and Economics">Business and Economics</option>
                            <option value="14-Health">Health</option>
                            <option value="13-Education">Education</option>
                            <option value="12-Social Sciences">Social Sciences</option>
                            <option value="11-Communications and Media">Communications and Media</option>
                            <option value="10-Mathematics">Mathematics</option>
                            <option value="9-Physics">Physics</option>
                            <option value="8-Biotechnology">Biotechnology</option>
                            <option value="7-Information Technology">Information Technology</option>
                            <option value="6-Environment">Environment</option>
                            <option value="5-Sustainable Development">Sustainable Development</option>
                            <option value="4-Science Communication">Science Communication</option>
                            <option value="3-Biology">Biology</option>
                            <option value="2-Chemistry">Chemistry</option>
                            <option value="1-Science & Technology">Science & Technology</option>



                        </select>
                        <div className="clearfix"></div>

                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <div className="control-group" style={{ marginBottom: '15px' }}>
                                    <label >Name of Conference<span style={{ color: '#F00' }}>*</span></label>
                                    <input type="text" className="form-control input-lg" id="name_of_conference" name="name_of_conference" placeholder="Name of Conference" required onChange={handleChange} value={formData.name_of_conference} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <div className="control-group">
                                    <label>Conference Theme<span style={{ color: '#F00' }}>*</span></label>
                                    <input type="text" className="form-control input-lg" id="conference_theme" name="conference_theme" placeholder="Conference Theme" required onChange={handleChange} value={formData.conference_theme} />
                                </div>
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label >From Date<span style={{ color: '#F00' }}>*</span></label>
                                <input type="date" name="from_date" id="from_date" className="dropdate form-control input-lg"
                                    onChange={handleChange} value={formData.from_date} />
                            </div>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label >To Date<span style={{ color: '#F00' }}>*</span></label>
                                <input type="date" name="to_date" id="to_date" onChange={handleChange} value={formData.to_date} className="dropdate form-control input-lg" /></div>
                        </div>

                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label >Name of Venue<span style={{ color: '#F00' }}>*</span></label>
                                <input type="text" className="form-control input-lg" id="name_of_venue" name="name_of_venue" onChange={handleChange} value={formData.name_of_venue} placeholder="Name of Venue" required /></div>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label >Address of Venue<span style={{ color: '#F00' }}>*</span></label>
                                <textarea className="form-control input-lg" id="address_of_venue" name="address_of_venue" onChange={handleChange} value={formData.address_of_venue} placeholder="Address of Venue" required ></textarea></div>
                        </div>

                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label>City<span style={{ color: '#F00' }}>*</span></label>
                                <input type="text" className="form-control input-lg" id="city" name="city" placeholder="City" required onChange={handleChange} value={formData.city} /></div>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label >Country<span style={{ color: '#F00' }}>*</span></label>
                                <select name="country" id="ccountry" onChange={handleChange} value={formData.country} className="form-control input-lg">

                                    <option>--- Select Country ---</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji Islands">Fiji Islands</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong SAR">Hong Kong SAR</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea">Korea</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macao SAR">Macao SAR</option>
                                    <option value="Macedonia, Former Yugoslav Republic">Macedonia, Former Yugoslav Republic</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="North Korea">North Korea</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn Islands">Pitcairn Islands</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="St. Helena">St. Helena</option>
                                    <option value="St. Kitts and Nevis">St. Kitts and Nevis</option>
                                    <option value="St. Lucia">St. Lucia</option>
                                    <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
                                    <option value="St. Vincent and the Grenadines">St. Vincent and the Grenadines</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City">Vatican City</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                    <option value="Virgin Islands">Virgin Islands</option>
                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>

                                </select></div>
                        </div>

                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label>Name of Organizer/ Association/ Society</label>
                                <input type="text" onChange={handleChange} value={formData.name_of_organizer} className="form-control" id="name_of_organizer" name="name_of_organizer" placeholder="Name of Organizer/ Association/ Society" /></div>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label>Contact Person <span style={{ color: '#F00' }}>*</span></label>
                                <input type="text" onChange={handleChange} value={formData.contact_person} className="form-control input-lg" id="contact_person" name="contact_person" placeholder="Contact Person" /></div>
                        </div>

                        <div className='row mb-3'>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label >Contact Number<span style={{ color: '#F00' }}>*</span></label>
                                <input type="text" className="form-control input-lg" id="contact_number" name="contact_number" onChange={handleChange} value={formData.contact_number} placeholder="Contact Number" required /></div>
                            <div className='col-md-6'>
                                <div className="clearfix"></div>
                                <label >Email<span style={{ color: '#F00' }}>*</span></label>
                                <input type="email" className="form-control input-lg" id="cemail" name="cemail" placeholder="Email" onChange={handleChange} value={formData.email} required /></div>
                        </div>

                        <div className="clearfix"></div>
                        <label >Website</label>
                        <input type="text" className="form-control input-lg" id="website" name="website" placeholder="Website" onChange={handleChange} value={formData.website} />
                        <div className="clearfix"></div>
                        <div className="clearfix"></div><br />
                        <div className="personal-details" style={{ paddingBottom: '30px' }}>
                            <div className="clearfix"></div>
                            <p className="post-terms"><strong>
                                <input type="checkbox" className="" required /> </strong> I/We accept
                            </p>
                            <div className="g-recaptcha" style={{ marginBottom: '20px' }} data-sitekey="6LeLnPcUAAAAAFrgRyfVep2VVDf2OCyoJrtQ7wbL" required></div>
                            <input type="submit" className="btn btn-primary btn-lg" value="Update" />
                            {/* <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                onClick={()=>navigate("/conferences-active-list")}
                            >Update</button> */}

                            <div className="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
