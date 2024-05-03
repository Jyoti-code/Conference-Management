import React, { useState } from "react";
import axios from 'axios';

export default function DelegateRegister() {

    // const handleChange = (e) => {
    //     const { name, value, files } = e.target;
    //     if (files) {
    //         setFormData({ ...formData, [name]: files[0] });
    //     } else {
    //         setFormData({ ...formData, [name]: value });
    //     }
    // };
    
    const resetImageField = () => {
        setFormData({ ...formData, profile_image: null });
        document.getElementById("profile_image").value = "";
    };

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        del_reg_no: '',
        delegate_category: '',
        title: '',
        delegate_name: '',
        mobile_country_code: '',
        mobile: '',
        gender: '',
        dob: '',
        email: '',
        designation: '',
        affiliation: '',
        city: '',
        country: '',
        address_for_correspondence: '',
        office_telephone_country_code: '',
        office_telephone: '',
        residence_telephone_country_code: '',
        residence_telephone: '',
        website: '',
        profile_image: null
    });

       const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataToSend.append(key, formData[key]);
            });

            const response = await axios.post('http://127.0.0.1:8000/api/delegateStore', formDataToSend);
            console.log(response.data)

            if (response && response.data && response.data.message) {
                setSuccessMessage('Delegate registered successfully!');
                resetImageField();
                setFormData({ ...formData, profile_image: null }); 
            } else {
                setErrorMessage('Unexpected response format');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage('An error occurred while registering.');
            }
        }
    };

    return (
        <div>
            <div className='container'>
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
                <div className='row'>
                    <div className="card" style={{ borderColor: '#fff' }}>
                        <div className="card-body">
                            <div className="card-title mt-3 mb-3">
                                <span className='text-secondary' style={{ fontWeight: 'bold' }}><h3>Delegate Form</h3></span>
                            </div>

                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                
                                    <label>Delegate Registration Number</label>
                                    <input type='text' className="form-control input-lg mb-3"
                                        name="del_reg_no" id="del_reg_no" value={formData.del_reg_no} placeholder='Fixed Registration number'
                                        onChange={(e) => setFormData({ ...formData, del_reg_no: e.target.value })} />
                                
                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <label>Delegate Category <span>*</span></label>
                                        <select name="delegate_category" id="delegate_category" className="form-control input-lg" value={formData.delegate_category}
                                            onChange={(e) => setFormData({ ...formData, delegate_category: e.target.value })} required>
                                            <option value="">Select</option>
                                            <option value="General Delegate">General Delegate</option>
                                            <option value="Student Delegate">Student Delegate</option>

                                        </select>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="clearfix"></div>
                                        <div className="control-group">
                                            <label>Select Title</label>
                                            <select name="title" value={formData.title} id="title" className="form-control input-lg"
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}  >
                                                <option value="Dr">Dr</option>
                                                <option value="Prof">Prof</option>
                                                <option value="Mr">Mr</option>
                                                <option value="Ms">Ms</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                    <label>Delegate Name</label>
                                    <input type="text" className="form-control input-lg mb-3" name="delegate_name" id="delegate_name" placeholder="Delegate Name" value={formData.delegate_name}
                                        onChange={(e) => setFormData({ ...formData, delegate_name: e.target.value })} />
                                

                                <div className='row mb-3'>
                                    <div className='col-md-2'>
                                        <label>Country Code</label>
                                        <input type="text" name="mobile_country_code" id="mobile_country_code" className="form-control input-lg" value={formData.mobile_country_code} placeholder='Example +91'
                                            onChange={(e) => setFormData({ ...formData, mobile_country_code: e.target.value })} />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <div className="control-group">
                                            <label>Mobile Number</label>
                                            <input type="text" className="form-control input-lg" id="mobile" name="mobile" placeholder="Mobile Number" size="10" value={formData.mobile}
                                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div className="clearfix"></div>
                                        <div className="control-group">
                                            <label>Gender</label>
                                            <select name="gender" id="gender" value={formData.gender} className="form-control input-lg"
                                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mb-3 mb-3'>
                                    <div className='col-md-6'>
                                        <div className="clearfix"></div>
                                        <div className="control-group">
                                            <label>Date of Birth(DD-MM-YYYY)</label><br />
                                            <input type="date" value={formData.dob} name="dob" id="dob" className='form-control input-lg'
                                                onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Designation/Profession</label><br />
                                        <input type="text" value={formData.designation} className='form-control input-lg' placeholder='Designation/Profession' name="designation" id="designation" onChange={(e) => setFormData({ ...formData, designation: e.target.value })} />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <div className="clearfix"></div>
                                        <div className="control-group">
                                            <label>Email</label>
                                            <input type="email" value={formData.email} className="form-control input-lg" id="email" name="email" placeholder="Email" required
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="clearfix"></div>
                                        <div className="control-group">
                                            <label>Institution/ Affiliation</label>
                                            <input type="text" className="form-control input-lg" id="affiliation" name="affiliation" value={formData.affiliation} placeholder="Institution/ Affiliation" required onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <div className="clearfix"></div>
                                        <div className="control-group">
                                            <label>City</label>
                                            <input type="text" className="form-control input-lg" id="city" name="city" placeholder="City" value={formData.city} required onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="clearfix"></div>
                                        <div className="control-group">
                                            <label>Country</label>
                                            <select name="country" value={formData.country} id="country" className="form-control input-lg" onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
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
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                    <label>Address for Correspondence</label>
                                    <textarea className='form-control input-lg mb-3' placeholder='Address for Correspondence' name="address_for_correspondence" value={formData.address_for_correspondence} onChange={(e) => setFormData({ ...formData, address_for_correspondence: e.target.value })} id="address_for_correspondence" ></textarea>

                                <div className='row mb-3'>
                                    <div className='col-md-2'>
                                        <label>Office Country Code</label>
                                        <input type='text' className='form-control input-lg' name="office_telephone_country_code" id="office_telephone_country_code" placeholder='County code' value={formData.office_telephone_country_code}
                                            onChange={(e) => setFormData({ ...formData, office_telephone_country_code: e.target.value })} />
                                    </div>
                                    <div className='col-md-4'>
                                        <label>Telephone</label>
                                        <input type="tel" name="office_telephone" id="office_telephone" className='form-control input-lg' value={formData.office_telephone} placeholder="Telephone number" onChange={(e) => setFormData({ ...formData, office_telephone: e.target.value })} />
                                    </div>

                                    <div className='col-md-2'>
                                        <label>Residential Country Code</label>
                                        <input type='text' name="residence_telephone_country_code" id="residence_telephone_country_code" className='form-control input-lg' placeholder='County code' value={formData.residence_telephone_country_code}
                                            onChange={(e) => setFormData({ ...formData, residence_telephone_country_code: e.target.value })} />
                                    </div>
                                    <div className='col-md-4'>
                                        <label>Mobile</label>
                                        <input type="tel" name="residence_telephone" id="residence_telephone" className='form-control input-lg' value={formData.residence_telephone} placeholder="Mobile number" onChange={(e) => setFormData({ ...formData, residence_telephone: e.target.value })} />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <label>Website</label>
                                        <input type="text" className='form-control input-lg' name="website" id="website" value={formData.website} placeholder="website"
                                            onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                                    </div>
                                     <div className='col-md-6'>
                                        <label>Upload Photo</label>
                                        <input type="file" className='form-control input-lg' accept=".pdf" onChange={(event) => setFormData({ ...formData, upload_file: event.target.files[0] })} />

                                    </div>

                                </div>

                                <div className="clearfix"></div>

                                <div className="personal-details" style={{ paddingBottom: '30px' }}>
                                    <div className="clearfix"></div>
                                    <p className="post-terms"><strong> <input type="checkbox" className="" required /> </strong> I/We accept
                                    </p>
                                    <div className="g-recaptcha" style={{ marginBottom: '20px' }} data-sitekey="6LeLnPcUAAAAAFrgRyfVep2VVDf2OCyoJrtQ7wbL" required></div>
                                    <input type="submit" className="btn btn-primary btn-lg" value="Submit" />
                                    <div className="clearfix"></div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
