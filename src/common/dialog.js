//commentDialog.js
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import RootSiblings from 'react-native-root-siblings';

let lastPopView;
class CommentDialog extends Component {
  static show = options => {
    options = Object.assign(
      {},
      {
        containt: '',
        cancelText: '取消',
        sureText: '确定',
        canPressShadow: false,//点击弹窗外面是否关闭
        cancel: () => {},
        sure: () => {},
      },
      options,
    );
    if (lastPopView !== undefined) {
      CommentDialog.hide(lastPopView);
    }
    lastPopView = new RootSiblings((<DialogContainer {...options} />));
  };

  static hide = instance => {
    instance.destroy();
  };
  componentDidMount() {
    setTimeout(()=>{
      this.props.navigation.navigate('Welcome');
    }, 2000);
  }


  render() {
    // return null;
    return (
        <View>
            <Text>saasfas</Text>
        </View>
    )
  }
}

class DialogContainer extends Component {
  sure = () => {
    const {sure} = this.props;
    sure();
    this.close();
  };
  cancel = () => {
    const {cancel} = this.props;
    cancel();
    this.close();
  };
  close = () => {
    CommentDialog.hide(lastPopView);
  };
  render() {
    const {
      containt,
      sureText,
      cancelText,
      canPressShadow,//点击弹窗外面是否关闭
    } = this.props;
    return (
      <View >
        <TouchableWithoutFeedback
          onPress={() => {
            canPressShadow && this.close();
          }}
          >
          <View  />
        </TouchableWithoutFeedback>
        {true && (
          <View >
            <View >
              <View >
                <View >
                  <Text style={{color: '#fff'}}>头部</Text>
                </View>
              </View>
              <View >
                <Text >{containt}</Text>
              </View>
              <View >
                <TouchableOpacity
                  
                  onPress={this.cancel}>
                  <Text >{cancelText}</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.sure}>
                  <Text >{sureText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default CommentDialog;