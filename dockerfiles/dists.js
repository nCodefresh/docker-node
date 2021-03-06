// Supported distributions for debian flavors of linux
var dists = module.exports = []
dists['debian'] = []
dists['ubuntu'] = []
dists['centos'] = []
dists['fedora'] = []

// Debian
dists['debian']['wheezy'] = []
dists['debian']['wheezy']['node'] = []
dists['debian']['wheezy']['iojs'] = []
dists['debian']['wheezy']['node']['0.10.30']  = {}
dists['debian']['wheezy']['node']['0.10.31']  = {deb:'nodejs_0.10.31-1chl1~wheezy1_amd64.deb'}
dists['debian']['wheezy']['node']['0.10.32']  = {}
dists['debian']['wheezy']['node']['0.10.33']  = {}
dists['debian']['wheezy']['node']['0.10.34']  = {}
dists['debian']['wheezy']['node']['0.10.35']  = {}
dists['debian']['wheezy']['node']['0.10.36']  = {}
dists['debian']['wheezy']['node']['0.12.0']   = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}

dists['debian']['jessie'] = []
dists['debian']['jessie']['node'] = []
dists['debian']['jessie']['iojs'] = []
dists['debian']['jessie']['node']['0.10.30']  = {}
dists['debian']['jessie']['node']['0.10.31']  = {deb:'nodejs_0.10.31-1chl1~jessie1_amd64.deb'}
dists['debian']['jessie']['node']['0.10.32']  = {}
dists['debian']['jessie']['node']['0.10.33']  = {}
dists['debian']['jessie']['node']['0.10.34']  = {}
dists['debian']['jessie']['node']['0.10.35']  = {}
dists['debian']['jessie']['node']['0.10.36']  = {}
dists['debian']['jessie']['node']['0.12.0']   = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}
dists['debian']['jessie']['iojs']['1.3.0']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.3.0-1nodesource1~jessie1_amd64.deb'}
dists['debian']['jessie']['iojs']['1.4.1']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.1-1nodesource1~jessie1_amd64.deb'}
dists['debian']['jessie']['iojs']['1.4.2']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.2-1nodesource1~jessie1_amd64.deb'}
dists['debian']['jessie']['iojs']['1.4.3']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.3-1nodesource1~jessie1_amd64.deb'}
dists['debian']['jessie']['iojs']['1.5.0']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.5.0-1nodesource1~jessie1_amd64.deb'}
dists['debian']['jessie']['iojs']['1.5.1']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.5.1-1nodesource1~jessie1_amd64.deb'}
dists['debian']['jessie']['iojs']['1.6.1']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.6.1-1nodesource1~jessie1_amd64.deb'}
dists['debian']['jessie']['iojs']['1.6.2']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.6.2-1nodesource1~jessie1_amd64.deb'}

dists['debian']['sid'] = []
dists['debian']['sid']['node'] = []
dists['debian']['sid']['iojs'] = []
dists['debian']['sid']['node']['0.10.30']     = {}
dists['debian']['sid']['node']['0.10.31']     = {deb:'nodejs_0.10.31-1chl1~sid1_amd64.deb'}
dists['debian']['sid']['node']['0.10.32']     = {}
dists['debian']['sid']['node']['0.10.33']     = {}
dists['debian']['sid']['node']['0.10.34']     = {}
dists['debian']['sid']['node']['0.10.35']     = {}
dists['debian']['sid']['node']['0.10.36']     = {}
dists['debian']['sid']['node']['0.12.0']      = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}
dists['debian']['sid']['iojs']['1.3.0']       = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.3.0-1nodesource1~sid1_amd64.deb'}
dists['debian']['sid']['iojs']['1.4.1']       = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.1-1nodesource1~sid1_amd64.deb'}
dists['debian']['sid']['iojs']['1.4.2']       = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.2-1nodesource1~sid1_amd64.deb'}
dists['debian']['sid']['iojs']['1.4.3']       = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.3-1nodesource1~sid1_amd64.deb'}
dists['debian']['sid']['iojs']['1.5.0']       = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.5.0-1nodesource1~sid1_amd64.deb'}
dists['debian']['sid']['iojs']['1.5.1']       = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.5.1-1nodesource1~sid1_amd64.deb'}
dists['debian']['sid']['iojs']['1.6.1']       = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.6.1-1nodesource1~sid1_amd64.deb'}
dists['debian']['sid']['iojs']['1.6.2']       = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.6.2-1nodesource1~sid1_amd64.deb'}

// Ubuntu
dists['ubuntu']['precise']  = []
dists['ubuntu']['precise']['node']  = []
dists['ubuntu']['precise']['iojs']  = []
dists['ubuntu']['precise']['node']['0.10.30'] = {}
dists['ubuntu']['precise']['node']['0.10.31'] = {deb:'nodejs_0.10.31-1chl1~precise1_amd64.deb'}
dists['ubuntu']['precise']['node']['0.10.32'] = {}
dists['ubuntu']['precise']['node']['0.10.33'] = {}
dists['ubuntu']['precise']['node']['0.10.34'] = {}
dists['ubuntu']['precise']['node']['0.10.35'] = {}
dists['ubuntu']['precise']['node']['0.10.36'] = {}
dists['ubuntu']['precise']['node']['0.12.0']  = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}

dists['ubuntu']['trusty']   = []
dists['ubuntu']['trusty']['node']   = []
dists['ubuntu']['trusty']['iojs']   = []
dists['ubuntu']['trusty']['node']['0.10.30']  = {}
dists['ubuntu']['trusty']['node']['0.10.31']  = {deb:'nodejs_0.10.31-1chl1~trusty1_amd64.deb'}
dists['ubuntu']['trusty']['node']['0.10.32']  = {}
dists['ubuntu']['trusty']['node']['0.10.33']  = {}
dists['ubuntu']['trusty']['node']['0.10.34']  = {}
dists['ubuntu']['trusty']['node']['0.10.35']  = {}
dists['ubuntu']['trusty']['node']['0.10.36']  = {}
dists['ubuntu']['trusty']['node']['0.12.0']   = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}
dists['ubuntu']['trusty']['iojs']['1.3.0']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.3.0-1nodesource1~trusty1_amd64.deb'}
dists['ubuntu']['trusty']['iojs']['1.4.1']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.1-1nodesource1~trusty1_amd64.deb'}
dists['ubuntu']['trusty']['iojs']['1.4.2']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.2-1nodesource1~trusty1_amd64.deb'}
dists['ubuntu']['trusty']['iojs']['1.4.3']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.3-1nodesource1~trusty1_amd64.deb'}
dists['ubuntu']['trusty']['iojs']['1.5.0']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.5.0-1nodesource1~trusty1_amd64.deb'}
dists['ubuntu']['trusty']['iojs']['1.5.1']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.5.1-1nodesource1~trusty1_amd64.deb'}
dists['ubuntu']['trusty']['iojs']['1.6.1']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.6.1-1nodesource1~trusty1_amd64.deb'}
dists['ubuntu']['trusty']['iojs']['1.6.2']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.6.2-1nodesource1~trusty1_amd64.deb'}

dists['ubuntu']['utopic']   = []
dists['ubuntu']['utopic']['node']   = []
dists['ubuntu']['utopic']['iojs']   = []
dists['ubuntu']['utopic']['node']['0.10.32']  = {}
dists['ubuntu']['utopic']['node']['0.10.33']  = {}
dists['ubuntu']['utopic']['node']['0.10.34']  = {}
dists['ubuntu']['utopic']['node']['0.10.35']  = {}
dists['ubuntu']['utopic']['node']['0.10.36']  = {}
dists['ubuntu']['utopic']['node']['0.12.0']   = {url: 'https://deb.nodesource.com/node012/pool/main/n/nodejs/'}
dists['ubuntu']['utopic']['iojs']['1.3.0']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.3.0-1nodesource1~utopic1_amd64.deb'}
dists['ubuntu']['utopic']['iojs']['1.4.1']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.1-1nodesource1~utopic1_amd64.deb'}
dists['ubuntu']['utopic']['iojs']['1.4.2']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.2-1nodesource1~utopic1_amd64.deb'}
dists['ubuntu']['utopic']['iojs']['1.4.3']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.4.3-1nodesource1~utopic1_amd64.deb'}
dists['ubuntu']['utopic']['iojs']['1.5.0']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.5.0-1nodesource1~utopic1_amd64.deb'}
dists['ubuntu']['utopic']['iojs']['1.5.1']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.5.1-1nodesource1~utopic1_amd64.deb'}
dists['ubuntu']['utopic']['iojs']['1.6.1']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.6.1-1nodesource1~utopic1_amd64.deb'}
dists['ubuntu']['utopic']['iojs']['1.6.2']    = {url:'https://deb.nodesource.com/iojs_1.x/pool/main/i/iojs/',deb:'iojs_1.6.2-1nodesource1~utopic1_amd64.deb'}

// Centos
dists['centos']['5'] = []
dists['centos']['5']['node'] = []
dists['centos']['5']['node']['0.10.31'] = {epel:true}
dists['centos']['5']['node']['0.10.32'] = {epel:true}
dists['centos']['5']['node']['0.10.33'] = {epel:true}
dists['centos']['5']['node']['0.10.34'] = {epel:true}
dists['centos']['5']['node']['0.10.35'] = {epel:true}
dists['centos']['5']['node']['0.10.36'] = {epel:true}

dists['centos']['6'] = []
dists['centos']['6']['node'] = []
dists['centos']['6']['node']['0.10.31'] = {}
dists['centos']['6']['node']['0.10.32'] = {}
dists['centos']['6']['node']['0.10.33'] = {}
dists['centos']['6']['node']['0.10.34'] = {}
dists['centos']['6']['node']['0.10.35'] = {}
dists['centos']['6']['node']['0.10.36'] = {}

dists['centos']['7'] = []
dists['centos']['7']['node'] = []
dists['centos']['7']['node']['0.10.31'] = {}
dists['centos']['7']['node']['0.10.32'] = {}
dists['centos']['7']['node']['0.10.33'] = {}
dists['centos']['7']['node']['0.10.34'] = {}
dists['centos']['7']['node']['0.10.35'] = {}
dists['centos']['7']['node']['0.10.36'] = {}

// Fedora
dists['fedora']['20'] = []
dists['fedora']['20']['node'] = []
dists['fedora']['20']['node']['0.10.31'] = {}
dists['fedora']['20']['node']['0.10.32'] = {}
dists['fedora']['20']['node']['0.10.33'] = {}
dists['fedora']['20']['node']['0.10.34'] = {}
dists['fedora']['20']['node']['0.10.35'] = {}
dists['fedora']['20']['node']['0.10.36'] = {}


dists['fedora']['21'] = []
dists['fedora']['21']['node'] = []
dists['fedora']['21']['node']['0.10.35'] = {}
dists['fedora']['21']['node']['0.10.36'] = {}
