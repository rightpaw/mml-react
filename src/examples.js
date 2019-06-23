export var examples = [
  {
    name: "Simple Support",
    description:
      "The most basic example is adding simple buttons to your message that help automate common tasks",
    mml: `<mml name="support">
  <text>It looks like your credit card isn't activated yet, activate it now:</text>
  <button name="action" value="Activate">Activate Card</button>
</mml>`
  },
  {
    name: "Support and Rich Data",
    description: "common tasks",
    mml: `<mml name="support">
<text>Did you authorize these last 3 transactions on your account?</text>
<card>
  <row>
    <column width="4">$15</column>
    <column width="8">Oren's Hummus</column>
  </row>
  <row>
    <column width="4">$1000</column>
    <column width="8">Apple monitor stand</column>
  </row>
  <row>
    <column width="4">$60</column>
    <column width="8">Epic Games Skins</column>
  </row>
</card>
<button name="authorized" value="yes">Yes</button>
<button name="authorized" value="yes">No</button>
</mml>`
  },
  {
    name: "Support Data Input",
    description: "Structured data input without leaving the chat UI",
    mml: `<mml>
	<md>Happy to setup your new credit card application, what's your **yearly** family income?</md>
  <input type="text" name="email" />
	<button name="send" value="submit">Submit</button>
</mml>`
  },
  {
    name: "Gigs",
    description: "A simple gig scheduling workflow for referals",
    mml: `<mml name="gigs">
<text>Hi Jack, I'm painting John's house, looks like they also need some plumbing work, do any of these times work for you on Saturday?</text>
<buttonlist name="times">
  <button value="9:30">9:30</button>
  <button value="10:00">10:00</button>
  <button value="11:30">11:30</button>
  <button value="nope">Nope</button>
</buttonlist>
</mml>`
  },
  {
    name: "Advanced Scheduling",
    description: "Datetime picker with availability using ical",
    mml: `<mml>
	<text>When would you like to schedule your massage?</text>
	<scheduler name="massage_appointment" duration="30" interval="30" />
  <button name="action" value="reserve">Reserve</button>
</mml>`
  },
  {
    name: "E-commerce",
    description: "Carousel style layout for intuitive selection on mobile",
    mml: `<mml>
    <md>Here are some front bumpers that will fit your 2018-2019 JL!</md>
    <carousel>
        <item>
            <image src="https://turn5.scene7.com/is/image/Turn5/J107329-JL?wid=250&amp;hei=187&amp;op_usm=0.8,1,10,0" />
            <text>Barricade Adventure HD Front Bumper</text>
            <md>**$404.99**</md>
            <button url="https://www.extremeterrain.com/barricade-adventure-hd-front-bumper-2018-jl.html">View Product</button>
        </item>
        <item>
            <image src="https://turn5.scene7.com/is/image/Turn5/J116651?wid=250&amp;hei=187&amp;op_usm=0.8,1,10,0" />
            <text>Barricade Adventure HD Front Bumper w/ LED Fog Lights &amp; 20 in. LED Light Bar</text>
            <md>**$529.99**</md>
            <button url="https://www.extremeterrain.com/barricade-adventure-hd-front-bumper-w-led-fog-lights-20-led-light-bar-0718-wrangl.html">View Product</button>
        </item>
        <item>
            <image src="https://turn5.scene7.com/is/image/Turn5/J127063-JL?wid=250&amp;hei=187&amp;op_usm=0.8,1,10,0" />
            <text>Barricade HD Front Bumper w/ 20 in. Light Bar</text>
            <md>**$549.99**</md>
            <button url="https://www.extremeterrain.com/barricade-hd-front-bumper-w-20-light-bar-2018-jl.html">View Product</button>
        </item>
        <item>
            <image src="https://turn5.scene7.com/is/image/Turn5/J116311?wid=250&amp;hei=187&amp;op_usm=0.8,1,10,0" />
            <text>RedRock 4x4 Avenger Full Width Front Bumper w/o Winch Plate</text>
            <md>**$729.99**</md>
            <button url="https://www.extremeterrain.com/redrock-4x4-avenger-full-width-front-bumper-w-o-winch-mount-0718-jk.html">View Product</button>
        </item>
    </carousel>
</mml>`
  },
  {
    name: "OverflowMenu",
    description: "A simple overflowmenu demo",
    mml: `<mml name="paging">
  <row>
    <column width="10">
      <text>Alert: The server is on fire!!</text>
    </column>
    <column width="2">
      <overflow>
        <button name="action" value="Ignore">Ignore</button>
        <button name="action" value="ReRoute Ticket">ReRoute Ticket</button>
        <button name="action" value="Turn off the server">Turn off the server</button>
        <button name="action" value="Book a vacation">Book a vacation</button>
      </overflow>
    </column>
  </row>
  </mml>`
  },
  {
    name: "Flight info",
    description: "Demo of grid system capabilities",
    mml: `<mml>
  <text>Here is your flight info:</text>
  <card>
    <row>
      <column width="4" align="left">San Francisco</column>
      <column width="4"></column>
      <column width="4" align="right">New York</column>
    </row>
    <row>
      <column width="4" align="left"><md>## SFO</md></column>
      <column width="4" align="center"><icon name="flight" /></column>
      <column width="4" align="right"><md>## JFK</md></column>
    </row>
    <row>
      <column width="4" offset="4" align="center">
        <button value="view" text="View Boarding Pass" />
      </column>
    </row>
  </card>
  </mml>`
  }
];
