//------------------------------------------------------------//
//----------------------INTERFACE-----------------------------//
//------------------------------------------------------------//

var PluginParameters = [
{
		name:"----------------Filter 1 Cutoff----------------",               // Filter Cutoff Controls
		type:"text"
}, {		
		name:"Cutoff 1 Base",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {		
		name:"Cutoff 1 Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Cutoff 1 LFO",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Cutoff 1 Pedal",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Cutoff 1 Opp Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"-------------Filter 1 Resonance-------------",						// Filter Resonance Controls
		type:"text"
}, {		
		name:"Resonance 1 Base",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {		
		name:"Resonance 1 Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Resonance 1 LFO",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Resonance 1 Pedal",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Resonance 1 Opp Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {
		name:"Filter 1 Mode",									// Filter Mode
		type:"menu",
		valueStrings:[
				"High Pass", 
				"Low Pass",
				"Band Pass",
				"Notch"
		],
		minValue:1,
		maxValue:4,
		numberOfSteps:1,
		defaultValue:1,
}, {	
		name:"--------------Tube Overdrive 1--------------",						// Overdrive Controls
		type:"text"
}, {		
		name:"Overdrive 1 Base",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {		
		name:"Overdrive 1 Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Overdrive 1 LFO",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Overdrive 1 Pedal",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Overdrive 1 Opp Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {
		name:"-----------------Envelope 1-----------------",              	// Envelope Controls
		type:"text"
}, {		
		name:"Envelope 1 Attack",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {		
		name:"Envelope 1 Decay",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Envelope 1 Sustain",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Envelope 1 Release",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {
		name:"Envelope 1 Mode",								
		type:"menu",
		valueStrings:[
				"Follower", 
				"ADSR"	
		],
		numberOfSteps:1,
		defaultValue:0,
}, {
		name:"----------------Filter 2 Cutoff----------------",               // Filter Cutoff Controls
		type:"text"
}, {		
		name:"Cutoff 2 Base",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {		
		name:"Cutoff 2 Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Cutoff 2 LFO",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Cutoff 2 Pedal",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Cutoff 2 Opp Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"--------------Filter 2 Resonance--------------",						// Filter Resonance Controls
		type:"text"
}, {		
		name:"Resonance 2 Base",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {		
		name:"Resonance 2 Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Resonance 2 LFO",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Resonance 2 Pedal",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Resonance 2 Opp Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {
		name:"Filter 2 Mode",									// Filter Mode
		type:"menu",
		valueStrings:[
				"High Pass", 
				"Low Pass",
				"Band Pass",
				"Notch"	
		],
		numberOfSteps:1,
		defaultValue:0,
}, {	
		name:"--------------Tube Overdrive 2--------------",						// Overdrive Controls
		type:"text"
}, {		
		name:"Overdrive 2 Base",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {		
		name:"Overdrive 2 Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Overdrive 2 LFO",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Overdrive 2 Pedal",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Overdrive 2 Opp Env",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {
		name:"-------------Envelope 2 Settings-------------",              	// Envelope Controls
		type:"text"
}, {		
		name:"Envelope 2 Attack",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {		
		name:"Envelope 2 Decay",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Envelope 2 Sustain",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"Envelope 2 Release",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {
		name:"Envelope 2 Mode",								
		type:"menu",
		valueStrings:[
				"Follower", 
				"ADSR"	
		],
		numberOfSteps:1,
		defaultValue:0,
}, {
		name:"-----------------LFO Settings-----------------",              			// LFO Controls
		type:"text"
}, {		
		name:"LFO Speed",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {		
		name:"LFO Symmetry",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {	
		name:"LFO Pedal Speed Control",
		type:"linear",
		minValue:0,
		maxValue:127,
		numberOfSteps:127,
		defaultValue:0
}, {
		name:"LFO Waveform",								
		type:"menu",
		valueStrings:[
				"Triangle", 
				"Square",
				"Sine",
				"Clocked Random"	
		],
		numberOfSteps:1,
		defaultValue:0,
}, {
		name:"LFO Synchronisation",								
		type:"menu",
		valueStrings:[
				"Off", 
				"Sync to Env 1",
				"Sync to Env 2",	
		],
		numberOfSteps:1,
		defaultValue:0,
}, {
		name:"LFO Range",								
		type:"menu",
		valueStrings:[
				"Course", 
				"Fine",
		],
		numberOfSteps:1,
		defaultValue:0,
}		
]

//------------------------------------------------------------//
//--------------------CC ASSIGNMENT---------------------------//
//------------------------------------------------------------//
// Params are given an index; int value starting 
// from 0 in the order they were assigned above.
// This list uses the param index to assign CCs. 


var paraCC = [				
0,									//Param index 0 -- Filter 1 Cutoff Header Text

20,									//Param index 1 -- Cutoff 1 Base
 
21,									//Param index 2 -- Cutoff 1 Env 
 
22,									//Param index 3 -- Cutoff 1 LFO

24,									//Param index 4 -- Cutoff 1 Pedal

16,									//Param index 5 -- Cutoff 1 Opp Env
 
0,									//Param index 6 -- Res 1 Cutoff Header Text

24,									//Param index 7 -- Res 1 Base
 
25,									//Param index 8 -- Res 1 Env 
 
26,									//Param index 9 -- Res 1 LFO

27,									//Param index 10 -- Res 1 Pedal

17,									//Param index 11 -- Res 1 Opp Env

39,									//Param index 12 -- Filter Mode

0,									//Param index 13 -- Overdrive 1 Header Text

35,									//Param index 14 -- Over 1 Base
 
36,									//Param index 15 -- Over 1 Env 
 
37,									//Param index 16 -- Over 1 LFO

38,									//Param index 17 -- Over 1 Pedal

18,									//Param index 18 -- Over 1 Opp Env

0,									//Param index 19 -- Envelope 1 Cutoff Header Text
 
28,									//Param index 20 -- Envelope 1 Attack
 
29,									//Param index 21 -- Envelope 1	Sustain

30,									//Param index 22 -- Envelope 1	Decay
 
31,									//Param index 23 -- Envelope 1	Release

14,									//Param index 24 -- Envelope 1 Mode

0,									//Param index 25 -- Filter 2 Cutoff Header Text

60,									//Param index 26 -- Cutoff 2 Base
 
61,									//Param index 27 -- Cutoff 2 Env 
 
62,									//Param index 28 -- Cutoff 2 LFO

64,									//Param index 29 -- Cutoff 2 Pedal

56,									//Param index 30 -- Cutoff 2 Opp Env
 
0,									//Param index 31 -- Res 2 Cutoff Header Text

64,									//Param index 32 -- Res 2 Base
 
65,									//Param index 33 -- Res 2 Env 
 
66,									//Param index 34 -- Res 2 LFO

67,									//Param index 35 -- Res 2 Pedal

57,									//Param index 36 -- Res 2 Opp Env

79,									//Param index 37 -- Filter 2 Mode

0,									//Param index 38 -- Overdrive 2 Header Text

75,									//Param index 39 -- Over 2 Base
 
76,									//Param index 40 -- Over 2 Env 
 
77,									//Param index 41 -- Over 2 LFO

78,									//Param index 42 -- Over 2 Pedal

58,									//Param index 43 -- Over 2 Opp Env

0,									//Param index 44 -- Envelope 2 Cutoff Header Text
 
68,									//Param index 45 -- Envelope 2 Attack
 
69,									//Param index 46 -- Envelope 2	Sustain

70,									//Param index 47 -- Envelope 2	Decay
 
71,									//Param index 48 -- Envelope 2	Release

54,									//Param index 49 -- Envelope 2 Mode
 
0,									//Param index 50 -- LFO Settings Header Text

32,									//Param index 51 -- LFO Speed
 
33,									//Param index 52 -- LFO Symmetry

15,									//Param index 53 -- LFO pedal Speed Control

12,									//Param index 54 -- LFO Waveform 
 
10,									//Param index 55 -- LFO Syncronization
 
11									//Param index 56 -- LFO Range
];

//------------------------------------------------------------//
//--------------------Param Change----------------------------//
//----------------------Callback------------------------------//
//------------------------------------------------------------//


function ParameterChanged(param, value) {

    var cc = new ControlChange; //make a new control change message
    cc.number = paraCC[param]; //selects CC from the CC assignment list above
    if(param == 12) // Special case for Filter mode (1,2,3,4) rather than (0, 1, 2, 3)
    {
    cc.value = value + 1;
    }
    else if(param == 37) // Special case for Filter mode (1,2,3,4) rather than (0, 1, 2, 3)
    {
    cc.value = value + 1;
    }
    else
    {
    cc.value = value; //set the value for all other params apart from special case. 
    }
    cc.send(); //send the event
    cc.trace(); //print the event to the console

}

