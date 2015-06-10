# This is no longer maintained!

Sorry, time constraints have stopped from keeping track of this package. I recommend you look for alternatives on atmospherejs.


# NVD3_revised for Meteor
This was created because it seems there's an error in the other nvd3 packages. 
It is a fork of https://github.com/waitingkuo/meteor-nvd3

## Requirements
* npm
* d3


## How do I install this?
1. Install Meteorite `npm install -g meteorite`
2. Create Your project `mtr create graphapp`
3. Usually it is simply: `mrt add nvd3_revised` but no:

3.1 edit smart.json and add the following to the list:

    "nvd3": {
      "git": "https://github.com/donskifarrell/meteor-nvd3.git"
    }

3.2 run 'mrt' and it should download and add the package
3.3 Verify that 'nvd3' is added to the list at .meteor/packages. If not, add it and re-run mrt.

4. Go graphing


## References
[Meteor](http://docs.meteor.com/)

[Meteorite](http://oortcloud.github.com/meteorite/)

[Atmosphere (Smart Packages)](https://atmosphere.meteor.com/wtf/package)

[NVD3](http://nvd3.org/)

[D3](http://d3js.org)
