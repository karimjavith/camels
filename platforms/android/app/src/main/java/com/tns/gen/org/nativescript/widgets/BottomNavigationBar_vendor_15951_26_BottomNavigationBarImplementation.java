/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.org.nativescript.widgets;

public class BottomNavigationBar_vendor_15951_26_BottomNavigationBarImplementation
    extends org.nativescript.widgets.BottomNavigationBar
    implements com.tns.NativeScriptHashCodeProvider {
  public BottomNavigationBar_vendor_15951_26_BottomNavigationBarImplementation(
      android.content.Context param_0) {
    super(param_0);
    com.tns.Runtime.initInstance(this);
  }

  public BottomNavigationBar_vendor_15951_26_BottomNavigationBarImplementation(
      android.content.Context param_0, android.util.AttributeSet param_1) {
    super(param_0, param_1);
    com.tns.Runtime.initInstance(this);
  }

  public BottomNavigationBar_vendor_15951_26_BottomNavigationBarImplementation(
      android.content.Context param_0, android.util.AttributeSet param_1, int param_2) {
    super(param_0, param_1, param_2);
    com.tns.Runtime.initInstance(this);
  }

  public boolean onTap(int param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onTap", boolean.class, args);
  }

  public void onSelectedPositionChange(int param_0, int param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onSelectedPositionChange", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
