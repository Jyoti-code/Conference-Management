import React, { useState } from 'react';
import axios from 'axios';

export default function OrganizerRegister() {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name_of_organization: '',
        state: '',
        email: '',
        cemail: '',
        address: '',
        country: '',
        ccountry: '',
        city: '',
        ccity: '',
        contact_person: '',
        contact_number: '',
        ccontact_person: '',
        ccontact_number: '',
        gst: '',
        conference_category: '',
        name_of_conference: '',
        conference_theme: '',
        from_date: '',
        to_date: '',
        name_of_venue: '',
        address_of_venue: '',
        name_of_organizer: '',
        website: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/organizerStore', formData);
            if (response && response.data && response.data.message) {
                setSuccessMessage(response.data.message);
                setFormData({
                    name_of_organization: '',
                    state: '',
                    email: '',
                    cemail: '',
                    address: '',
                    country: '',
                    ccountry: '',
                    city: '',
                    ccity: '',
                    contact_person: '',
                    contact_number: '',
                    ccontact_person: '',
                    ccontact_number: '',
                    gst: '',
                    conference_category: '',
                    name_of_conference: '',
                    conference_theme: '',
                    from_date: '',
                    to_date: '',
                    name_of_venue: '',
                    address_of_venue: '',
                    name_of_organizer: '',
                    website: ''
                })
            } else if (response && response.data && response.data.error) {
                setErrorMessage('Invalid response format');
            } else {
                console.log('Registration failed: Unexpected response format');
            }
        } catch (error) {
            console.error('Error occurred:', error.message);
            setErrorMessage('An error occurred while registering.');
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
            <form method="post" onSubmit={handleSubmit}>
                <h3>Register Conference</h3>
                <hr />
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="control-group" style={{ marginBottom: '15px' }}>
                            <label >Organization Name<span style={{ color: '#F00' }}>*</span></label>
                            <input type="text" className="form-control input-lg" id="name_of_organization" name="name_of_organization"
                                value={formData.name_of_organization}
                                onChange={(e) => setFormData({ ...formData, name_of_organization: e.target.value })}
                                placeholder="Organization Name" required />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="control-group" style={{ marginBottom: '15px' }}>
                            <label>State<span style={{ color: '#F00' }}>*</span></label>
                            <select
                                name="state"
                                id="state"
                                className="form-control input-lg"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            >
                                <option value="">Select State</option>
                                <option value="Goa">Goa</option>
                            </select>
                        </div>
                    </div>
                    <div className="control-group" style={{ marginBottom: '15px' }}>
                        <label >Email<span style={{ color: '#F00' }}>*</span></label>
                        <input type="email" className="form-control input-lg" id="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    <div className="control-group" style={{ marginBottom: '15px' }}>
                        <label >Address<span style={{ color: '#F00' }}>*</span></label>

                        <textarea className="form-control input-lg" value={formData.address} id="address" name="address" placeholder="Address of Organization" required
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}></textarea>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <div className="control-group" style={{ marginBottom: '15px' }}>
                            <label >Country<span style={{ color: '#F00' }}>*</span></label>
                            <select name="country" id="country" value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })} className="form-control input-lg">

                                <option value="">Select Country</option>
                                <option value="1">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="4">American Samoa</option>
                                <option value="5">Andorra</option>
                                <option value="6">Angola</option>
                                <option value="7">Anguilla</option>
                                <option value="8">Antarctica</option>
                                <option value="9">Antigua And Barbuda</option>
                                <option value="10">Argentina</option>
                                <option value="11">Armenia</option>
                                <option value="12">Aruba</option>
                                <option value="13">Australia</option>
                                <option value="14">Austria</option>
                                <option value="15">Azerbaijan</option>
                                <option value="16">Bahamas The</option>
                                <option value="17">Bahrain</option>
                                <option value="18">Bangladesh</option>
                                <option value="19">Barbados</option>
                                <option value="20">Belarus</option>
                                <option value="21">Belgium</option>
                                <option value="22">Belize</option>
                                <option value="23">Benin</option>
                                <option value="24">Bermuda</option>
                                <option value="25">Bhutan</option>
                                <option value="26">Bolivia</option>
                                <option value="27">Bosnia and Herzegovina</option>
                                <option value="28">Botswana</option>
                                <option value="29">Bouvet Island</option>
                                <option value="30">Brazil</option>
                                <option value="31">British Indian Ocean Territory</option>
                                <option value="32">Brunei</option>
                                <option value="33">Bulgaria</option>
                                <option value="34">Burkina Faso</option>
                                <option value="35">Burundi</option>
                                <option value="36">Cambodia</option>
                                <option value="37">Cameroon</option>
                                <option value="38">Canada</option>
                                <option value="39">Cape Verde</option>
                                <option value="40">Cayman Islands</option>
                                <option value="41">Central African Republic</option>
                                <option value="42">Chad</option>
                                <option value="43">Chile</option>
                                <option value="44">China</option>
                                <option value="45">Christmas Island</option>
                                <option value="46">Cocos (Keeling) Islands</option>
                                <option value="47">Colombia</option>
                                <option value="48">Comoros</option>
                                <option value="51">Cook Islands</option>
                                <option value="52">Costa Rica</option>
                                <option value="53">Cote D'Ivoire (Ivory Coast)</option>
                                <option value="54">Croatia (Hrvatska)</option>
                                <option value="55">Cuba</option>
                                <option value="56">Cyprus</option>
                                <option value="57">Czech Republic</option>
                                <option value="50">Democratic Republic Of The Congo</option>
                                <option value="58">Denmark</option>
                                <option value="59">Djibouti</option>
                                <option value="60">Dominica</option>
                                <option value="61">Dominican Republic</option>
                                <option value="62">East Timor</option>
                                <option value="63">Ecuador</option>
                                <option value="64">Egypt</option>
                                <option value="65">El Salvador</option>
                                <option value="66">Equatorial Guinea</option>
                                <option value="67">Eritrea</option>
                                <option value="68">Estonia</option>
                                <option value="69">Ethiopia</option>
                                <option value="70">External Territories of Australia</option>
                                <option value="71">Falkland Islands</option>
                                <option value="72">Faroe Islands</option>
                                <option value="73">Fiji Islands</option>
                                <option value="74">Finland</option>
                                <option value="75">France</option>
                                <option value="76">French Guiana</option>
                                <option value="77">French Polynesia</option>
                                <option value="78">French Southern Territories</option>
                                <option value="79">Gabon</option>
                                <option value="80">Gambia The</option>
                                <option value="81">Georgia</option>
                                <option value="82">Germany</option>
                                <option value="83">Ghana</option>
                                <option value="84">Gibraltar</option>
                                <option value="85">Greece</option>
                                <option value="86">Greenland</option>
                                <option value="87">Grenada</option>
                                <option value="88">Guadeloupe</option>
                                <option value="89">Guam</option>
                                <option value="90">Guatemala</option>
                                <option value="91">Guernsey and Alderney</option>
                                <option value="92">Guinea</option>
                                <option value="93">Guinea-Bissau</option>
                                <option value="94">Guyana</option>
                                <option value="95">Haiti</option>
                                <option value="96">Heard and McDonald Islands</option>
                                <option value="97">Honduras</option>
                                <option value="98">Hong Kong S.A.R.</option>
                                <option value="99">Hungary</option>
                                <option value="100">Iceland</option>
                                <option value="101">India</option>
                                <option value="102">Indonesia</option>
                                <option value="103">Iran</option>
                                <option value="104">Iraq</option>
                                <option value="105">Ireland</option>
                                <option value="106">Israel</option>
                                <option value="107">Italy</option>
                                <option value="108">Jamaica</option>
                                <option value="109">Japan</option>
                                <option value="110">Jersey</option>
                                <option value="111">Jordan</option>
                                <option value="112">Kazakhstan</option>
                                <option value="113">Kenya</option>
                                <option value="114">Kiribati</option>
                                <option value="115">Korea North</option>
                                <option value="116">Korea South</option>
                                <option value="117">Kuwait</option>
                                <option value="118">Kyrgyzstan</option>
                                <option value="119">Laos</option>
                                <option value="120">Latvia</option>
                                <option value="121">Lebanon</option>
                                <option value="122">Lesotho</option>
                                <option value="123">Liberia</option>
                                <option value="124">Libya</option>
                                <option value="125">Liechtenstein</option>
                                <option value="126">Lithuania</option>
                                <option value="127">Luxembourg</option>
                                <option value="128">Macau S.A.R.</option>
                                <option value="129">Macedonia</option>
                                <option value="130">Madagascar</option>
                                <option value="131">Malawi</option>
                                <option value="132">Malaysia</option>
                                <option value="133">Maldives</option>
                                <option value="134">Mali</option>
                                <option value="135">Malta</option>
                                <option value="136">Man (Isle of)</option>
                                <option value="137">Marshall Islands</option>
                                <option value="138">Martinique</option>
                                <option value="139">Mauritania</option>
                                <option value="140">Mauritius</option>
                                <option value="141">Mayotte</option>
                                <option value="142">Mexico</option>
                                <option value="143">Micronesia</option>
                                <option value="144">Moldova</option>
                                <option value="145">Monaco</option>
                                <option value="146">Mongolia</option>
                                <option value="147">Montserrat</option>
                                <option value="148">Morocco</option>
                                <option value="149">Mozambique</option>
                                <option value="150">Myanmar</option>
                                <option value="151">Namibia</option>
                                <option value="152">Nauru</option>
                                <option value="153">Nepal</option>
                                <option value="154">Netherlands Antilles</option>
                                <option value="155">Netherlands The</option>
                                <option value="156">New Caledonia</option>
                                <option value="157">New Zealand</option>
                                <option value="158">Nicaragua</option>
                                <option value="159">Niger</option>
                                <option value="160">Nigeria</option>
                                <option value="161">Niue</option>
                                <option value="162">Norfolk Island</option>
                                <option value="163">Northern Mariana Islands</option>
                                <option value="164">Norway</option>
                                <option value="165">Oman</option>
                                <option value="166">Pakistan</option>
                                <option value="167">Palau</option>
                                <option value="168">Palestinian Territory Occupied</option>
                                <option value="169">Panama</option>
                                <option value="170">Papua new Guinea</option>
                                <option value="171">Paraguay</option>
                                <option value="172">Peru</option>
                                <option value="173">Philippines</option>
                                <option value="174">Pitcairn Island</option>
                                <option value="175">Poland</option>
                                <option value="176">Portugal</option>
                                <option value="177">Puerto Rico</option>
                                <option value="178">Qatar</option>
                                <option value="49">Republic Of The Congo</option>
                                <option value="179">Reunion</option>
                                <option value="180">Romania</option>
                                <option value="181">Russia</option>
                                <option value="182">Rwanda</option>
                                <option value="183">Saint Helena</option>
                                <option value="184">Saint Kitts And Nevis</option>
                                <option value="185">Saint Lucia</option>
                                <option value="186">Saint Pierre and Miquelon</option>
                                <option value="187">Saint Vincent And The Grenadines</option>
                                <option value="188">Samoa</option>
                                <option value="189">San Marino</option>
                                <option value="190">Sao Tome and Principe</option>
                                <option value="191">Saudi Arabia</option>
                                <option value="192">Senegal</option>
                                <option value="193">Serbia</option>
                                <option value="194">Seychelles</option>
                                <option value="195">Sierra Leone</option>
                                <option value="196">Singapore</option>
                                <option value="197">Slovakia</option>
                                <option value="198">Slovenia</option>
                                <option value="199">Smaller Territories of the UK</option>
                                <option value="200">Solomon Islands</option>
                                <option value="201">Somalia</option>
                                <option value="202">South Africa</option>
                                <option value="203">South Georgia</option>
                                <option value="204">South Sudan</option>
                                <option value="205">Spain</option>
                                <option value="206">Sri Lanka</option>
                                <option value="207">Sudan</option>
                                <option value="208">Suriname</option>
                                <option value="209">Svalbard And Jan Mayen Islands</option>
                                <option value="210">Swaziland</option>
                                <option value="211">Sweden</option>
                                <option value="212">Switzerland</option>
                                <option value="213">Syria</option>
                                <option value="214">Taiwan</option>
                                <option value="215">Tajikistan</option>
                                <option value="216">Tanzania</option>
                                <option value="217">Thailand</option>
                                <option value="218">Togo</option>
                                <option value="219">Tokelau</option>
                                <option value="220">Tonga</option>
                                <option value="221">Trinidad And Tobago</option>
                                <option value="222">Tunisia</option>
                                <option value="223">Turkey</option>
                                <option value="224">Turkmenistan</option>
                                <option value="225">Turks And Caicos Islands</option>
                                <option value="226">Tuvalu</option>
                                <option value="227">Uganda</option>
                                <option value="228">Ukraine</option>
                                <option value="229">United Arab Emirates</option>
                                <option value="230">United Kingdom</option>
                                <option value="231">United States</option>
                                <option value="232">United States Minor Outlying Islands</option>
                                <option value="233">Uruguay</option>
                                <option value="234">Uzbekistan</option>
                                <option value="235">Vanuatu</option>
                                <option value="236">Vatican City State (Holy See)</option>
                                <option value="237">Venezuela</option>
                                <option value="238">Vietnam</option>
                                <option value="239">Virgin Islands (British)</option>
                                <option value="240">Virgin Islands (US)</option>
                                <option value="241">Wallis And Futuna Islands</option>
                                <option value="242">Western Sahara</option>
                                <option value="243">Yemen</option>
                                <option value="244">Yugoslavia</option>
                                <option value="245">Zambia</option>
                                <option value="246">Zimbabwe</option>

                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="control-group" style={{ marginBottom: '15px' }}>
                            <label>City<span style={{ color: '#F00' }}>*</span></label>
                            <select name="city" id="city" value={formData.city} className="form-control input-lg" onChange={(e) => setFormData({ ...formData, city: e.target.value })}>
                                <option value="">Select City</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Kanpur">Kanpur</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className='col-md-6'>
                        <div className="control-group" style={{ marginBottom: '15px' }}>
                            <label >Contact Person<span style={{ color: '#F00' }}>*</span></label>
                            <input type="text" className="form-control input-lg" id="contact_person" name="contact_person"
                                placeholder="Contact Number" value={formData.contact_person} onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })} required />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="control-group" style={{ marginBottom: '15px' }}>
                            <label >Contact Number<span style={{ color: '#F00' }}>*</span></label>
                            <input type="text" className="form-control input-lg" id="contact_number" name="contact_number"
                                placeholder="Contact Person" value={formData.contact_number} onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })} required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="control-group" style={{ marginBottom: '15px' }}>
                        <label >GST/VAT</label>
                        <input type="text" className="form-control input-lg" id="gst" name="gst" placeholder="GST/VAT Number" onChange={(e) => setFormData({ ...formData, gst: e.target.value })} value={formData.gst} />
                    </div>
                </div>

                <div className="clearfix"></div>
                <h3>Conference Details</h3>
                <hr />
                <label>Conference Category <span style={{ color: '#F00' }}>*</span></label>
                <select name="conference_category" value={formData.conference_category} id="conference_category" className="form-control input-lg" required
                    onChange={(e) => setFormData({ ...formData, conference_category: e.target.value })}>
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
                <div className="control-group" style={{ marginBottom: '15px' }}>
                    <label >Name of Conference<span style={{ color: '#F00' }}>*</span></label>
                    <input type="text" className="form-control input-lg" id="name_of_conference" name="name_of_conference" placeholder="Name of Conference" onChange={(e) => setFormData({ ...formData, name_of_conference: e.target.value })} value={formData.name_of_conference} required />
                </div>
                <div className="clearfix"></div>
                <div className="control-group">
                    <label>Conference Theme<span style={{ color: '#F00' }}>*</span></label>
                    <input type="text" className="form-control input-lg" id="conference_theme" name="conference_theme" placeholder="Conference Theme" onChange={(e) => setFormData({ ...formData, conference_theme: e.target.value })} value={formData.conference_theme} required />
                </div>
                <div className="clearfix"></div>
                <label >From Date<span style={{ color: '#F00' }}>*</span></label>
                <input type="date" onChange={(e) => setFormData({ ...formData, from_date: e.target.value })} name="from_date" id="from_date" value={formData.from_date} className="dropdate form-control input-lg" />

                <div className="clearfix"></div>
                <label >To Date<span style={{ color: '#F00' }}>*</span></label>
                <input type="date" name="to_date" id="to_date" onChange={(e) => setFormData({ ...formData, to_date: e.target.value })} className="dropdate form-control input-lg" value={formData.to_date} />

                <div className="clearfix"></div>
                <label >Name of Venue<span style={{ color: '#F00' }}>*</span></label>
                <input type="text" className="form-control input-lg" id="name_of_venue" name="name_of_venue" placeholder="Name of Venue" required onChange={(e) => setFormData({ ...formData, name_of_venue: e.target.value })} value={formData.name_of_venue} />
                <div className="clearfix"></div>
                <label >Address of Venue<span style={{ color: '#F00' }}>*</span></label>

                <textarea className="form-control input-lg" id="address_of_venue" value={formData.address_of_venue} name="address_of_venue" placeholder="Address of Venue" required onChange={(e) => setFormData({ ...formData, address_of_venue: e.target.value })}></textarea>

                <div className="clearfix"></div>

                <label>City<span style={{ color: '#F00' }}>*</span></label>
                <input type="text" className="form-control input-lg" id="ccity" name="ccity" placeholder="City" value={formData.ccity} required onChange={(e) => setFormData({ ...formData, ccity: e.target.value })} />
                <div className="clearfix"></div>
                <label >Country<span style={{ color: '#F00' }}>*</span></label>
                <select name="ccountry" value={formData.ccountry} id="ccountry" className="form-control input-lg" onChange={(e) => setFormData({ ...formData, ccountry: e.target.value })}>

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
                <div className="clearfix"></div>
                <label>Name of Organizer/ Association/ Society</label>
                <input type="text" className="form-control" value={formData.name_of_organizer} id="name_of_organizer" name="name_of_organizer" onChange={(e) => setFormData({ ...formData, name_of_organizer: e.target.value })} placeholder="Name of Organizer/ Association/ Society" />
                <div className="clearfix"></div>
                <label>Contact Person <span style={{ color: '#F00' }}>*</span></label>
                <input type="text" className="form-control input-lg" onChange={(e) => setFormData({ ...formData, ccontact_person: e.target.value })} value={formData.ccontact_person} id="ccontact_person" name="ccontact_person" placeholder="Contact Person" />
                <div className="clearfix"></div>
                <label >Contact Number<span style={{ color: '#F00' }}>*</span></label>
                <input type="text" className="form-control input-lg" onChange={(e) => setFormData({ ...formData, ccontact_number: e.target.value })} value={formData.ccontact_number} id="ccontact_number" name="ccontact_number" placeholder="Contact Number" required />
                <div className="clearfix"></div>
                <label >Email<span style={{ color: '#F00' }}>*</span></label>
                <input type="email" className="form-control input-lg" id="cemail" onChange={(e) => setFormData({ ...formData, cemail: e.target.value })} value={formData.cemail} name="cemail" placeholder="Email" required />
                <div className="clearfix"></div>
                <label >Website</label>
                <input type="text" className="form-control input-lg" onChange={(e) => setFormData({ ...formData, website: e.target.value })} value={formData.website} id="website" name="website" placeholder="Website" />
                <div className="clearfix"></div>
                <div className="clearfix"></div><br />
                <div className="personal-details" style={{ paddingBottom: '30px' }}>
                    <div className="clearfix"></div>
                    <p className="post-terms"><strong>
                        <input type="checkbox" className="" required /> </strong> I/We accept
                        {/* <a href="https://smartconference.in/terms-and-condition.html" target="_blank">Terms & Conditions </a> and <a href="https://smartconference.in/privacy_policy.html" target="_blank">Privacy Policy</a> */}
                    </p>
                    <div className="g-recaptcha" style={{ marginBottom: '20px' }} data-sitekey="6LeLnPcUAAAAAFrgRyfVep2VVDf2OCyoJrtQ7wbL" required></div>
                    <input type="submit" className="btn btn-primary btn-lg" value="Post" />
                    <div className="clearfix"></div>
                </div>
            </form>
        </div>
    )
}
